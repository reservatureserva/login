var ofertaCo = (function() {
	var ini = (json)=>{
		eventButtons(json);
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
		console.log("******************* ");
		console.log(json);
		$(".js-titol").text(json.titulo);
		$(".js-empresa").text(json.agencia.nombre);
		$(".js-precio-base").text(json.precio_base + " â‚¬");
		$(".js-descripcion").text(json.descripcion);

	};

	return{
		ini 		: 		ini
	};
})();