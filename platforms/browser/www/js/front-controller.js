var contenido = (function() {
	var idLogin;
	var idRemember;
	var idRegistro;
	var cardReserva;
	var cardBusqueda;
	var perfil;
	var oferta;
	var faqs;
	var createOferta;
	var createCalendar;
	var modalCondiciones;
	var ini = ()=>{
		idLogin = $("#login");
		idRegistro = $("#registro");
		idRemember = $("#remember");
		cardBusqueda = $("#cardBusqueda");
		cardReserva = $("#cardReserva");
		perfil = $("#perfil");
		oferta = $("#oferta");
		faqs = $("#faqs");
		createOferta = $("#createOferta");
		createCalendar = $("#createCalendar");
		modalCondiciones = $("#modalCondiciones");
		//$(".js-draft").html("");
		globalListeners();
	};
	
	var globalListeners = ()=>{
		$(".faqs").click(function() {
			faqsView();
		});
	};

	var login = ()=>{
		console.log("loading login");
		$("#navBar").css("display", "none");
		$(".js-contenido").html(idLogin);
		loginCo.ini();
	};

	var registro = ()=>{
		console.log("loading registro");
		$(".js-contenido").html(idRegistro);
		registroCo.ini();
	};

	//muestra el navBar e inserta en js-contenido el contenido
	var home = (user)=>{
		console.log("loading home");
		$(".js-contenido").html("");
		homeCo.ini(user);
		filtroDialog();
		var json = "";
		reservaCo.createCard(json);
		//peticionesAJAX.reservas("", reservaCo.createCard);
	};

	var backHome = ()=>{
		console.log("loading home");
		$(".js-contenido").html("");
		reservasCards();
	};

	//generará y mostrará las reservas actuales recibidas del servidor
	var reservasCards = (cards)=>{
		console.log("loading card reserva");
		$(".js-contenido").html(cards);
		utils.truncateTexts();
	};


	var filtroDialog = ()=>{
		console.log("loading filtroDialog");
		modalFiltro.ini();

	};

	//generará y mostrará los resultados recibidos del servidor
	var resultCards = (cards)=>{
		console.log("loading card Busqueda");
		$(".js-contenido").html(cards);
		utils.truncateTexts();
		busquedaCo.ini();
	};

	var ofertaView = (json)=>{
		$(".js-contenido").html(oferta);
	};

	//Dialogo de texto con las condiciones que tenga la oferta, un check de aceptar condiciones
	var modalCondicionesView = (json)=>{
		$(".js-contenido").append(modalCondiciones);
		modalCondicionesCo.ini();
	};

	var perfil = ()=>{
		console.log("loading login");
		$(".js-contenido").html(perfil);
		perfilCo.ini();
	};

	var feedBack = (mensaje)=>{
		document.querySelector('#feedBack').MaterialSnackbar.showSnackbar({message: mensaje});
	};

	var logOut = ()=>{
		/*$(".js-draft").append(idLogin);
		$(".js-draft").append(idRegistro);
		$(".js-draft").append(cardReserva);
		$(".js-draft").append(cardBusqueda);
		$(".js-draft").append(perfil);*/
	};

	var remember = ()=>{
		console.log("loading remember");
		$(".js-contenido").html(idRemember);
		rememberCo.ini();
	};

	var faqsView = ()=>{
		$(".js-contenido").html(faqs);
		faqsCo.ini();
	};

	var createOfertaView = ()=>{
		$(".js-contenido").html(createOferta);
		createOfertaCo.ini();
	};

	var createCalendarView = ()=>{
		$(".js-contenido").html(createCalendar);
		createCalendarCo.ini();
	};

	var getCardBusqueda = ()=>{
		return cardBusqueda;
	};

	var getCardReserva = ()=>{
		return cardReserva;
	};

	var getModalCondiciones = ()=>{
		return modalCondiciones;
	}

	return{
		ini 				: 		ini,
		login				:		login,
		registro			:		registro,
		home				: 		home,
		reservasCards		: 		reservasCards,
		filtroDialog		: 		filtroDialog,
		resultCards			: 		resultCards,
		ofertaView			: 		ofertaView,
		modalCondicionesView: 		modalCondicionesView,
		feedBack 			: 		feedBack,
		perfil 				: 		perfil,
		logOut 				: 		logOut,
		backHome			: 		backHome,
		remember 			: 		remember,
		faqsView 			: 		faqsView,
		createOfertaView 	: 		createOfertaView,
		createCalendarView	: 		createCalendarView,
		getCardBusqueda		: 		getCardBusqueda,
		getCardReserva 		: 		getCardReserva,
		getModalCondiciones : 		getModalCondiciones
	}
})();