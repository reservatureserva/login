var busquedaCo = (function() {
	var ini = ()=>{
		$(".servicioCard").click((event)=>{
			var str = event.target.attributes.getNamedItem('data-oferta').value;
			console.log("peticion ajax a ofertas con identificador "+str);
			console.log("recupera el json");
			var json = "";
			contenido.ofertaView(json);
		});
	};

	return{
		ini 		: 			ini
	}
})();