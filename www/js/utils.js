var utils = (function() {
	var truncateTexts = ()=>{
		var texts = $(".truncate");
		for(var i = 0; i < texts.length; i++){
			$clamp(texts[i], {clamp: 3});
		}
	};

	var formatSeconds = (seconds)=>{
		var date = new Date(seconds*1000);
		return date.getUTCDate() + '/' + (date.getUTCMonth() + 1)+ '/' + date.getUTCFullYear();
	};

	var efectoInputs = ()=>{
		if(!(typeof(componentHandler) == 'undefined')){
			componentHandler.upgradeAllRegistered();
		}
	};

	var dataOK = (json)=>{
		for(var key in json){
			var data = json[key];
			if(data === undefined || data === null || data == ""){
				contenido.feedBack("Has de rellenar el campo "+key);
				return false;
			}
		}
		return true;
	};



	var abrir = (dia) => {
		var day = $(dia).attr("name");
		var td = $($(dia).parents("tr:first").find("td:last")[0]).html('<input type="time" name="' + day + '1"> - <input type="time" name="' + day + '2">');
		console.log(dia);
	};
	var cerrar = (dia) => {
		var day = $(dia).attr("name");
		var td = $($(dia).parents("tr:first").find("td:last")[0]).html('Cerrado');
		console.log(dia);
	};
	var dividir = (dia) => {
		var day = $(dia).attr("name");
		var td = $($(dia).parents("tr:first").find("td:last")[0]).html('<input type="time" name="' + day + '1"> - <input type="time" name="' + day + '2">     <input type="time" name="' + day + '3"> - <input type="time" name="' + day + '4">');
		console.log(dia);
	};



	return{
		truncateTexts 	: 	truncateTexts,
		formatSeconds	: 	formatSeconds,
		efectoInputs	: 	efectoInputs,
		dataOK			: 	dataOK,
		abrir			: 	abrir,
		cerrar			: 	cerrar,
		dividir			: 	dividir
	}
})();