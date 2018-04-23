var registroCo = (function() {
	var ini = ()=>{
		$('#date').bootstrapMaterialDatePicker({format : 'DD/MM/YYYY', weekStart : 0, time: false });
		$(".dtp-btn-ok").click(function() {
			$(".js-date").addClass("is-dirty");
		});
		if(!(typeof(componentHandler) == 'undefined')){
			componentHandler.upgradeAllRegistered();
		}

		$(".volver").click(function() {
			contenido.login();
		});
	};

	return{
		ini			: 			ini
	}

})();