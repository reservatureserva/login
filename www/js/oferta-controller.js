var ofertaCo = (function() {
	var ini = (json)=>{
		eventButtons(json);
		printView(json);
	};

	var eventButtons = (json)=>{
		$("#btn-reserva").click(function() {
			var json = {
				lunes 	: 	utils.getMonday().getTime(),
				oferta 	: 	json.id
			}
			peticionesAJAX.getAvailable(json, contenido.calendarView);
		});
	};

	var printView = (json)=>{
		$(".js-titol").text(json.titulo);
		$(".js-empresa").text(json.agencia.nombre);
		$(".js-precio-base").text(json.precio_base + " €");
		$(".js-descripcion").text(json.descripcion);
		var html = "";
		for (var i = 0; i < json.imagenes.length; i++) {
			if (i == 0) {
				html += '<div class="item active"><img src="' +utils.servidorURL + json.imagenes[i] +'"/></div>';
			} else {
				html += '<div class="item"><img src="'+utils.servidorURL + json.imagenes[i] +'"/></div>';
			}
		}
		$(".oferta-carousel").html(html);
	};

	return{
		ini 		: 		ini
	};
})();