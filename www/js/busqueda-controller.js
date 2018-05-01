var busquedaCo = (function() {
	var cardBusqueda = $("#cardBusqueda")[0];
	var ini = ()=>{
		$(".servicioCard").click((event)=>{
			var str = dataOfertaID(event);
			console.log("recupera el json");
			var json = "";
			contenido.ofertaView(json);
		});
	};

	var dataOfertaID = (event)=>{
		return event.target.attributes.getNamedItem('data-oferta') ? 
		event.target.attributes.getNamedItem('data-oferta').value: 
		$(event.target).parents("div[class='mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet serv mdl-shadow--2dp servicioCard']:first")[0].attributes.getNamedItem("data-oferta").value;
	};

	var createCard = (jsonArray)=>{
		for(var i = 0; i < jsonArray.length; i++){
			var result = jsonArray[i];
			var cardTmp = cardBusqueda.firstElementChild.cloneNode(true);
			cardTmp.attributes.getNamedItem("data-oferta").value = result.id;
			//background class cardBackground
			$(cardTmp).find(".cardBackground").css("background-image", "url('https://ksassets.timeincuk.net/wp/uploads/sites/55/2015/11/2014Skrillex_Getty166442228110314-1.jpg')");

			//image class cardImg
			$(cardTmp).find(".cardImg").css("background-image", "url('https://ksassets.timeincuk.net/wp/uploads/sites/55/2015/11/2014Skrillex_Getty166442228110314-1.jpg')");

			//title 
			$(cardTmp).find("h2")

			//description

			//price
			$(cardTmp).find("h6")

			//capsule in cardBusqueda
			cardBusqueda.append(cardTmp);



			console.log(result);
		}
	};

	return{
		ini 		: 			ini,
		createCard 	: 			createCard
	}
})();