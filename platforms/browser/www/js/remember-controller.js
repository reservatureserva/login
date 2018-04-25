var rememberCo = (function() {
	var ini = ()=>{
		eventButtons();
	};

	var eventButtons = ()=>{
		$("#btn-rem-send").click(function(){
			contenido.login();
		});
	};

	return{
		ini		: 		ini
	}

})();