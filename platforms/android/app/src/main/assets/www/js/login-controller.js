var loginCo = (function() {
	var ini = ()=>{
		eventButtons();
	};

	var eventButtons = ()=>{
		$("#btn-register").click(function(){
			contenido.registro();
		});


		$("#btn-remember").click(function(){
			contenido.remember();
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