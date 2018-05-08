var perfilCo = (function() {
	var ini = ()=>{
		var user = cookies.getJsonFromCookie(utils.userCookieName);
		createPerfil(user);
		//Cambia los datos de un usuario
		$('#btn-guardar').click(function() {
			procesarUpdate(user);
		});
		//Borra un usuario
		$('#btn-borrar').click(function() {
			
		});

		$("form[name='updateFormu'] input[name='fotoPer']").change(function() {
			var image = document.querySelector("form[name='updateFormu'] input[name='fotoPer']");
			utils.imgToBase64(image);
		});


		utils.efectoInputs();
	};
	var createJSON = (name, tlf)=>{
		var json = {
			"nombre":name,
			"tlf":tlf
		}

		if(utils.dataOK(json)){
			var picture = cookies.getCookie(utils.imageCookieName);
			if(picture){
				json.foto_perfil = cookies.getCookie(utils.imageCookieName);
				cookies.deleteCookie(utils.imageCookieName);
			}
			peticionesAJAX.updateUser(json, contenido.perfil);			
		}
	};

	var createPerfil = (json)=>{
		var form = $("form[name='updateFormu']");
		$(form).find("input[name='nombre']").val(json.nombre);
		$(form).find("input[name='email']").val(json.email);
		$(form).find("input[name='dni']").val(json.dni);
		$(form).find("input[name='tlfn']").val(json.tlf);
		$(form).find("input[name='fecha']").val(json.fecha_nacimiento);
		if(json.foto_perfil != undefined && json.foto_perfil != ""){
			$('.profilePicture').css('background-image','url(http://localhost:8000/' + json.foto_perfil + ')');			
		}

	};
	var procesarUpdate = (user)=>{
		var name = $("form[name='updateFormu'] input[name='nombre']").val();

		var tlf = $("form[name='updateFormu'] input[name='tlfn']").val();


		var password = $("form[name='updateFormu'] input[name='pass']").val();
		var repassword = $("form[name='updateFormu'] input[name='repass']").val();

		if (password !== repassword) {
			contenido.feedBack("Contraseña no coincide");
			return;
		}
		if (password !== undefined && password !== "") {
			userCo.changePassword(password);
		}

		if(name !== user.nombre || tlf !== user.tlf){
			createJSON(name, tlf);
		}

	};

	return{
		ini						: 			ini
	}

})();