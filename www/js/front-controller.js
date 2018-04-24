var contenido = (function() {
	var idLogin;
	var idRegistro;
	var cardReserva;
	var cardBusqueda
	var perfil;
	var ini = ()=>{
		idLogin = $("#login");
		idRegistro = $("#registro");
		cardReserva = $("#cardReserva");
		cardBusqueda = $("#cardBusqueda");
		perfil = $("#perfil");
		$(".js-draft").html();
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
	};

	var detailsResult = (json)=>{

	};

	//Dialogo de texto con las condiciones que tenga la oferta, un check de aceptar condiciones
	var alquilarDialog = (json)=>{

	};

	var perfil = (json)=>{
		console.log("loading login");
		$(".js-contenido").html(perfil);
		//perfil.ini(json);
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

	return{
		ini 				: 		ini,
		login				:		login,
		registro			:		registro,
		home				: 		home,
		reservasCards		: 		reservasCards,
		filtroDialog		: 		filtroDialog,
		resultCards			: 		resultCards,
		detailsResult		: 		detailsResult,
		alquilarDialog		: 		alquilarDialog,
		alquilarDialog		: 		alquilarDialog,
		feedBack 			: 		feedBack,
		perfil 				: 		perfil,
		logOut 				: 		logOut,
		backHome			: 		backHome
	}
})();