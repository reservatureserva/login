var loginCo = (function() {
	var ini = ()=>{
		eventButtons();
	};

	var eventButtons = ()=>{
		$("#btn-register").click(function(){
			contenido.registro();
		});


		$("#google-connect").click(function(){
			userCo.google();
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