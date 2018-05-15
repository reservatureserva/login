var modalCondicionesCo = (function() {
	var ini = (fechas)=>{
		var oferta = cookies.getJsonFromCookie(utils.offerSelected);
		var arrayCondiciones = oferta.condiciones;
		eventButtons();
		var ul = $(contenido.getModalCondiciones()).find(".js-listaCondiciones");
		ul.html("");
		for (var c = 0; c < arrayCondiciones.length; c++) {
			ul.append("<li>".concat(arrayCondiciones[c]).concat("</li>"));
		}
		confirmText(oferta, fechas);
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

	var confirmText = (oferta, hora)=>{
		$(".js-confirmReserva").append("Reserva para el día "+hora[0]);
		$(".js-confirmReserva2").append("Al confirmar acepta que cumple con los siguientes requisitos de "+oferta.titulo);
		var epoc = hora[1];
	};

	return{
		ini 	: 		ini
	};
})();