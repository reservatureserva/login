var perfilCo = (function() {
	var ini = ()=>{
		createPerfil();
		//Cambia los datos de un usuario
		$('#btn-guardar').click(function() {
			procesarUpdate();
		});
		//Borra un usuario
		$('#btn-borrar').click(function() {
			
		});
		utils.efectoInputs();
	};
	var createJSON = (name, tlf, foto)=>{
		var json = {
			"nombre":name,
			"tlf":tlf,
			"foto_perfil":foto
		}
		console.log(json);
	};

	var createPerfil = (json)=>{
		json = {"dni":"66666666R","nombre":"Arturo Molls","email":"alx@gmail.com","tlf":"666266666","fecha_nacimiento":"704332800","fecha_registro":"704332800","foto_perfil":"http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg"}
		var form = $("form[name='updateFormu']");
		$(form).find("input[name='nombre']").val(json.nombre);
		$(form).find("input[name='email']").val(json.email);
		$(form).find("input[name='dni']").val(json.dni);
		$(form).find("input[name='tlfn']").val(json.tlf);
		$(form).find("input[name='fecha']").val(utils.formatSeconds(json.fecha_nacimiento));
		$('.profilePicture').css('background-image','url(' + json.foto_perfil + ')');

	};
	var procesarUpdate = ()=>{
		var foto = "";
		var name = $("form[name='updateFormu'] input[name='nombre']").val();
		var password = $("form[name='updateFormu'] input[name='pass']").val();
		var repassword = $("form[name='updateFormu'] input[name='repass']").val();
		var tlf = $("form[name='updateFormu'] input[name='tlfn']").val();
		var avatar = document.querySelector("form[name='updateFormu'] input[name='fotoPer']");

		if (password !== repassword) {
			contenido.feedBack("Contraseña no coincide");
			return;
		}
		if (password !== undefined && password !== "") {
			userCo.changePassword(password);
		}
		if (avatar && avatar.files[0]) {

			var FR = new FileReader();

			FR.addEventListener("load", function(e) {
				foto = e.target.result;
				createJSON(name, tlf, foto);
			}); 

			FR.readAsDataURL( avatar.files[0] );
		} else {
			createJSON(name, tlf, foto);
		}



	};

	return{
		ini						: 			ini
	}

})();