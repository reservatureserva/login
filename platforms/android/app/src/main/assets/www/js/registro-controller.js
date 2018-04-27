var registroCo = (function() {
	var ini = ()=>{
		$('#date').bootstrapMaterialDatePicker({format : 'DD/MM/YYYY', weekStart : 0, time: false });
		$(".dtp-btn-ok").click(function() {
			$(".js-date").addClass("is-dirty");
			$(".js-date").removeClass("is-invalid");
		});
		if(!(typeof(componentHandler) == 'undefined')){
			componentHandler.upgradeAllRegistered();
		}

		//listener click del btn-registro llame a procesarRegistro
		$("form[name='registroFormu']").submit(function() {
			procesarRegistro();
			return false;
		});



	};
	var createJSON = (dni, name, email, tlf, date, foto, password)=>{
		var json = {
			"dni":dni,
			"nombre":name,
			"email":email,
			"tlf":tlf,
			"fecha_nacimiento":date,
			"foto_perfil":foto
		}
		peticionesAJAX.registro(json, userCo.registro(email, password));
	};
	var procesarRegistro = ()=>{
		var foto = "";
		var dni = $("form[name='registroFormu'] input[name='dni']").val();
		var name = $("form[name='registroFormu'] input[name='name']").val();
		var email = $("form[name='registroFormu'] input[name='email']").val();
		var password = $("form[name='registroFormu'] input[name='password']").val();
		var repassword = $("form[name='registroFormu'] input[name='repassword']").val();
		var tlf = $("form[name='registroFormu'] input[name='tlf']").val();
		var date = $("form[name='registroFormu'] input[name='date']").val();
		var avatar = document.querySelector("form[name='registroFormu'] input[name='avatar']");
		
		if (password !== repassword) {
			contenido.feedBack("Contraseña no coincide");
			return;
		}
		if (avatar && avatar.files[0]) {

			var FR = new FileReader();

			FR.addEventListener("load", function(e) {
				foto = e.target.result;
				createJSON(dni, name, email, tlf, date, foto, password);
			}); 

			FR.readAsDataURL( avatar.files[0] );
		} else {
			createJSON(dni, name, email, tlf, date, foto, password);
		}



	};

	return{
		ini						: 			ini
	}

})();