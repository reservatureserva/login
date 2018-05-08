var registroCo = (function() {
	var ini = ()=>{
		$('#date-registro').bootstrapMaterialDatePicker({format : 'DD/MM/YYYY', weekStart : 0, time: false });
		$(".dtp-btn-ok").click(function() {
			$(".js-date").addClass("is-dirty");
			$(".js-date").removeClass("is-invalid");
		});
		
		utils.efectoInputs();

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
			"fecha_nacimiento":date
		}
		if(utils.dataOK(json)){
			json.foto_perfil = foto;
			peticionesAJAX.registro(json, userCo.registro);
		}
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
			var file    = avatar.files[0];

			var reader  = new FileReader();

			reader.onloadend = function () {
				foto = reader.result;
				console.log(foto)
				createJSON(dni, name, email, tlf, date, foto, password);
			}

			reader.readAsDataURL(file);
		} else {
			createJSON(dni, name, email, tlf, date, foto, password);
		}



	};

	return{
		ini						: 			ini
	}

})();