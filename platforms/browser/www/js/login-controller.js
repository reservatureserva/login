var loginCo = (function() {
	var ini = ()=>{
		eventButtons();
	};

	var eventButtons = ()=>{
		$("#us-connect").click(function(){
			contenido.registro();
		});

		$("#btn-login").click(function(){
			login();
			//contenido.home();
		});
	};

	var login = ()=>{
		var email = $("#login-email").val();
		var password = $("#login-password").val();
		userCo.login(email, password);

	};

	return{
		ini		: 		ini
	}

})();