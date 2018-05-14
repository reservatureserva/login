var calendarCo = (function() {

	var ini = (calendar)=>{
		calendar = JSON.parse('{"oferta":"asdasdasdX","total_dìsponible":"20","lunes":{"hora_inicio":"08:00","hora_fin":"14:00","hora_inicio2":"15:00","hora_fin2":"20:00"},"martes":{"hora_inicio":"08:00","hora_fin":"14:00","hora_inicio2":"15:00","hora_fin2":"20:00"},"miercoles":{"hora_inicio":"08:00","hora_fin":"14:00","hora_inicio2":"15:00","hora_fin2":"22:00"},"jueves":{"hora_inicio":"08:00","hora_fin":"14:00","hora_inicio2":"15:00","hora_fin2":"20:00"},"viernes":{"hora_inicio":"08:00","hora_fin":"14:00","hora_inicio2":"15:00","hora_fin2":"20:00"},"sabado":{"hora_inicio":"08:00","hora_fin":"14:00","hora_inicio2":"15:00","hora_fin2":"20:00"},"domingo":{"hora_inicio":"08:00","hora_fin":"14:00","hora_inicio2":"15:00","hora_fin2":"20:00"}}');
		var total_dìsponible = calendar.total_dìsponible;
		var oferta = calendar.oferta;
		delete calendar.oferta;
		delete calendar.total_dìsponible;
		var rangeMaxOpenWeek = rangeTime(calendar);
		printarTabla(rangeMaxOpenWeek, calendar);


	};

	/** Comprueba la hora de inicio más temprana para iniciar las horas **/
	var rangeTime = (calendar)=>{
		var horaIni = 24;
		var minIni = 60;

		var horaFin = 0;
		var minFin = 0;

		for(var dia in calendar){
			if(calendar[dia].hora_inicio !== ""){
				var horaI = calendar[dia].hora_inicio.split(":")[0];
				var minI = calendar[dia].hora_inicio.split(":")[1];

				var horaF = calendar[dia].hora_fin2 !== "" ? calendar[dia].hora_fin2.split(":")[0] : calendar[dia].hora_fin.split(":")[0];
				var minF = calendar[dia].hora_fin2 !== "" ? calendar[dia].hora_fin2.split(":")[1] : calendar[dia].hora_fin.split(":")[1];


				if(horaI < horaIni){
					horaIni = horaI;
					minIni = minI;
				}else if(horaI == horaIni && minI < minIni){
					minIni = minI;
				}
				
				if(horaF > horaFin){
					horaFin = horaF;
					minFin = minF;
				}else if(horaF == horaFin && minF > minFin){
					minFin = minF;
				}
			}
		}

		return [horaIni + ":" + minIni, horaFin + ":" + minFin];
	};

	/** Comprueba las franjas horarias cerradas y printa en gris **/
	var closedDates = (calendar, open, closed)=>{
		
	};

	/** Muestra el máximo de disponibilidad y los ocupados para aquella hora **/
	var printarDisponibilidad = ()=>{

	};

	var printarTabla = (hours, calendar)=>{
		var hIni = hours[0].split(":")[0];
		var hFin = hours[1].split(":")[0];
		var trs = hFin - hIni;
		var tds = {};
		for(var dia in calendar){
			tds[dia] = [];
			if(calendar[dia].hora_inicio === ""){// añadir "o la data-date es menor a la fecha actual"
				for (var i = hIni; i <= hFin; i++) {
					tds[dia].push("<td class='closed' data-date='24/05/2018 "+hours[0]+"'></td>");
				}
			}else{
				var tmpHIni = calendar[dia].hora_inicio.split(":")[0];
				var tmpMIni = calendar[dia].hora_inicio.split(":")[1];

				var tmpHFin = calendar[dia].hora_fin.split(":")[0];
				var tmpMFin = calendar[dia].hora_fin.split(":")[1];
				//si no hay descanso
				if(calendar[dia].hora_inicio2 === ""){
					var closed1 = tmpHIni - hIni;
					var closed2 = hFin - tmpHFin;
					var opened = tmpHFin - tmpHIni;
					//closed1
					for (var i = 0; i < closed1; i++) {
						tds[dia].push("<td class='closed' data-date='24/05/2018 "+hours[0]+"'></td>");
					}

					//opened
					for (var i = 0; i < opened; i++) {
						tds[dia].push("<td class='opened' data-date='24/05/2018 "+hours[0]+"'></td>");
					}

					//closed2
					for (var i = 0; i < closed2; i++) {
						tds[dia].push("<td class='closed' data-date='24/05/2018 "+hours[0]+"'></td>");
					}


				}else{
					var tmpHIni2 = calendar[dia].hora_inicio2.split(":")[0];//5
					var tmpMIni2 = calendar[dia].hora_inicio2.split(":")[1];

					var tmpHFin2 = calendar[dia].hora_fin2.split(":")[0];//6
					var tmpMFin2 = calendar[dia].hora_fin2.split(":")[1];


					var closed1 = tmpHIni - hIni;//2
					var closed2 = tmpHIni2 - tmpHFin;//1

					var closed3 = hFin - tmpHFin2;//1

					var opened1 = tmpHFin - tmpHIni;//1

					var opened2 = tmpHFin2 - tmpHIni2;//1

					//closed1
					for (var i = 0; i < closed1; i++) {
						tds[dia].push("<td class='closed' data-date='24/05/2018 "+hours[0]+"'></td>");
					}

					//opened
					for (var i = 0; i < opened1; i++) {
						tds[dia].push("<td class='opened' data-date='24/05/2018 "+hours[0]+"'></td>");
					}

					//closed2
					for (var i = 0; i < closed2; i++) {
						tds[dia].push("<td class='closed' data-date='24/05/2018 "+hours[0]+"'></td>");
					}
					//opened2
					for (var i = 0; i < opened2; i++) {
						tds[dia].push("<td class='opened' data-date='24/05/2018 "+hours[0]+"'></td>");
					}

					//closed3
					for (var i = 0; i < closed3; i++) {
						tds[dia].push("<td class='closed' data-date='24/05/2018 "+hours[0]+"'></td>");
					}
				}
			}
		}
		var j = 0;
		for(var i = parseInt(hIni); i < hFin; i++){
			var tr = "<tr data-hour='"
			.concat(i < 10 ? "0"+i : i)
			.concat(":00'><td>")
			.concat(i < 10 ? "0"+i : i)
			.concat(":00</td>");
			for(var dia in tds){
				var td = tds[dia][j];
				tr += td;
			}
			tr.concat("</tr>");
			j++;
			$("tbody").append(tr);
		}

	};

	return{
		ini 	: 	ini
	}


})();