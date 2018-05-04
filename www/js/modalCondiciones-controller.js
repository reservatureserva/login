var modalCondicionesCo = (function() {
	var ini = ()=>{
		var arrayCondiciones = ["ser mayor de edad", "tener gato", "patata :v"];
		eventButtons();
		var ul = $(contenido.getModalCondiciones()).find(".js-listaCondiciones");
		ul.html("");
		for (var c = 0; c < arrayCondiciones.length; c++) {
			ul.append("<li>".concat(arrayCondiciones[c]).concat("</li>"));
		}
		modal();
	};

	var eventButtons = ()=>{
		$(".js-cancelar").click(function() {
			contenido.getModalCondiciones()[0].close();
		});

		$(".js-aceptar").click(function() {
			//peticion ajax
			contenido.getModalCondiciones()[0].close();
			
		});
	};

	var modal = ()=>{
		var dialog = contenido.getModalCondiciones()[0];
		if (!dialog.showModal) {
			dialogPolyfill.registerDialog(dialog);
		}
		dialog.showModal();	
	}



	return{
		ini 	: 		ini
	};
})();