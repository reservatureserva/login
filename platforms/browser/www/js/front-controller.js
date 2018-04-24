$(document).ready(function() {
	var user = firebase.auth().currentUser;

	contenido.ini();
	if (user) {
		contenido.home();
	} else {
		contenido.login();
	}
});

var contenido = (function() {
	var idLogin;
	var idRegistro;
	var cardReserva;
	var cardBusqueda
	var ini = ()=>{
		idLogin = $("#login");
		idRegistro = $("#registro");
		cardReserva = $("#cardReserva");
		cardBusqueda = $("#cardBusqueda");
	};
	

	var login = ()=>{
		console.log("loading login");
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

	var alquilarDialog = (json)=>{

	};

	var feedBack = (mensaje)=>{
		document.querySelector('#feedBack').MaterialSnackbar.showSnackbar({message: mensaje});
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
		feedBack 			: 		feedBack
	}
})();