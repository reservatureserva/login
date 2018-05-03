var modalCondiciones = (function() {
	var ini = (arrayCondiciones)=>{
		eventButtons();
		var ul = $(".js-listaCondiciones");
		for (var c = 0; c < arrayCondiciones.length; c++) {
			ul.append("<li>".concat(arrayCondiciones[c]).concat("</li>"));
		}
	};

	var eventButtons = ()=>{
		$(".js-cancelar").click(function() {
			
		});

		$(".js-aceptar").click(function() {
			//peticion ajax
			
		});
	};

	var modal = ()=>{
		var dialog = $("#aceptarCondiciones")[0];
		if (!dialog.showModal) {
			dialogPolyfill.registerDialog(dialog);
		}
		dialog.showModal();

		
	}



	return{
		ini 	: 		ini
	};
})();