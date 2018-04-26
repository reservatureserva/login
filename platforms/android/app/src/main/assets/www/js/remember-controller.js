var rememberCo = (function() {
	var ini = ()=>{
		eventButtons();
	};

	var eventButtons = ()=>{
		$("#btn-rem-send").click(function(){
			userCo.rememberPassword($("#remember-email").val());
		});

		$(".volver").click(function(e) {
			contenido.login();
		});

	};

	return{
		ini		: 		ini
	}

})();