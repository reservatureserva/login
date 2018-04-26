var contenido = (function() {
	var idLogin;
	var idRemember;
	var idRegistro;
	var cardReserva;
	var cardBusqueda
	var perfil;
	var oferta;
	var faqs;
	var createOferta;
	var ini = ()=>{
		idLogin = $("#login");
		idRegistro = $("#registro");
		idRemember = $("#remember");
		cardReserva = $("#cardReserva");
		cardBusqueda = $("#cardBusqueda");
		perfil = $("#perfil");
		oferta = $("#oferta");
		faqs = $("#faqs");
		createOferta = $("#createOferta");
		$(".js-draft").html();
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
	var home = (json)=>{
		console.log("loading home");
		$(".js-contenido").html("");
		homeCo.ini();
		reservasCards();
		filtroDialog();
	};

	var backHome = ()=>{
		console.log("loading home");
		$(".js-contenido").html("");
		reservasCards();
	};

	//generará y mostrará las reservas actuales recibidas del servidor
	var reservasCards = ()=>{
		console.log("loading card reserva");
		$(".js-contenido").html(cardReserva);
	};


	var filtroDialog = ()=>{
		console.log("loading filtroDialog");
		//$(".js-contenido").append(dialog);
		modalFiltro.ini();

	};

	//generará y mostrará los resultados recibidos del servidor
	var resultCards = (json)=>{
		console.log("loading card Busqueda");
		$(".js-contenido").html(cardBusqueda);
		busquedaCo.ini();
	};

	var ofertaView = (json)=>{
		$(".js-contenido").html(oferta);
	};

	//Dialogo de texto con las condiciones que tenga la oferta, un check de aceptar condiciones
	var alquilarDialog = (json)=>{

	};

	var perfil = (json)=>{
		console.log("loading login");
		$(".js-contenido").html(perfil);
	};

	var feedBack = (mensaje)=>{
		document.querySelector('#feedBack').MaterialSnackbar.showSnackbar({message: mensaje});
	};

	var logOut = ()=>{
		$(".js-draft").append(idLogin);
		$(".js-draft").append(idRegistro);
		$(".js-draft").append(cardReserva);
		$(".js-draft").append(cardBusqueda);
		$(".js-draft").append(perfil);
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
	};

	return{
		ini 				: 		ini,
		login				:		login,
		registro			:		registro,
		home				: 		home,
		reservasCards		: 		reservasCards,
		filtroDialog		: 		filtroDialog,
		resultCards			: 		resultCards,
		ofertaView			: 		ofertaView,
		alquilarDialog		: 		alquilarDialog,
		alquilarDialog		: 		alquilarDialog,
		feedBack 			: 		feedBack,
		perfil 				: 		perfil,
		logOut 				: 		logOut,
		backHome			: 		backHome,
		remember 			: 		remember,
		faqsView 			: 		faqsView,
		createOfertaView 	: 		createOfertaView
	}
})();