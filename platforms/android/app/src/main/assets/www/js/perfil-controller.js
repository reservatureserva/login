var perfilCo = (function() {
	var ini = ()=>{
		//Cambia los datos de un usuario
		$('#btn-guardar').click(function() {
			procesarUpdate();
		});
		//Borra un usuario
		$('#btn-borrar').click(function() {
			
		});




	};
	var createJSON = (name, tlf, foto)=>{
		var json = {
			"nombre":name,
			"tlf":tlf,
			"foto_perfil":foto
		}
		console.log(json);
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