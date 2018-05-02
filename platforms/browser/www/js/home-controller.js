var homeCo = (function() {
	var menu = false;
	var ini = (json)=>{
		printNav(json);
		empresaAction();
		perfilEvents();
	};

	var empresaAction = ()=>{
		$("#menu-empresa").click(function(event){
			event.preventDefault();
			if(!menu){
				menu = !menu;
				$(".botonEmp ul").css("visibility", "visible");
				$(".botonEmp ul").css("opacity", "1");
				$(".botonEmp a#menu-empresa + ul").css("visibility", "visible");
				$(".botonEmp a#menu-empresa + ul").css("animation", "scale-in 0.5s");
				$("#plus").html("clear");
			}else{
				menu = !menu; 
				$(".botonEmp ul").css("visibility", "hidden");
				$(".botonEmp ul").css("opacity", "0");
				$(".botonEmp a#menu-empresa + ul").css("visibility", "hidden");
				$("#plus").html("add");
			}
		});
	};


	var printNav = (json)=>{
		json = {"dni":"66666666R","nombre":"Arturo Molls","email":"alx@gmail.com","tlf":"666266666","fecha_nacimiento":"704332800","fecha_registro":"704332800","foto_perfil":"http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg"}
		$('.img').css('background-image','url(' + json.foto_perfil + ')');
		$("#navBar").css("display", "block");
	};

	var perfilEvents = ()=>{
		$("#home").click(function(e) {	
			e.preventDefault();
			e.stopPropagation();
			contenido.backHome();
		});

		$("#verPerfil").click(function() {
			/** #### Node #### **/
			contenido.perfil();
		});

		$("#logout").click(function() {
			userCo.logOut();			
		});
	};

	return{
		ini:ini
	};

})();