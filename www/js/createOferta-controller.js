var createOfertaCo = (function() {
	var ini = ()=>{
		eventButtons();
		utils.efectoInputs();
	};
	var crearOferta = ()=>{
		var json = {
			titulo 		: $("form[name='createOferta'] input[name='nombre-oferta']").val(),
			categoria	: $("form[name='createOferta'] input[name='categoria'][type='hidden']").val(),
			precio_base	: $("form[name='createOferta'] input[name='precio-oferta']").val(),
			descripcion : $("form[name='createOferta'] textarea[name='descripcion-oferta']").val()
		};
		console.log(json);


	};

	var eventButtons = ()=>{
		$(".js-addCondicion").click(function() {
			var condiciones = $(".js-condiciones")[0].cloneNode(true);
			var nCondi = ++$(condiciones).find("input").length;
			var newCondition = condiciones.firstElementChild.cloneNode(true);
			$(newCondition).find("input").attr("name", "condicion"+nCondi);
			$(newCondition).find("input").attr("id", "condicion"+nCondi);
			$(newCondition).find("label").attr("for", "condicion"+nCondi);
			$(newCondition).find("label").text("Condición "+nCondi);
			$(".js-condiciones").append(newCondition);
		});

		$('#btn-crear').click(function() {
			crearOferta();
		});
	};

	return{
		ini						: 			ini
	}

})();