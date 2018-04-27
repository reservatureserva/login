var rememberCo = (function() {
	var ini = ()=>{
		eventButtons();
	};

	var eventButtons = ()=>{
		$("#btn-rem-send").click(function(){
			userCo.rememberPassword($("#remember-email").val());
		});
	};

	return{
		ini		: 		ini
	}

})();