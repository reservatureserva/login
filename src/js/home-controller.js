var homeCo = (function() {
	var menu = false;
	var ini = (json)=>{
		$("#navBar").css("display", "block");
		empresaAction();

	};

	var empresaAction = ()=>{
		$("#menu-share").on("click", function(event){
			
			event.preventDefault();
			event.stopPropagation();
			if(!menu){
				menu = !menu;
				$(".botonEmp ul").css("visibility", "visible");
				$(".botonEmp ul").css("opacity", "1");
				$(".botonEmp a#menu-share + ul").css("visibility", "visible");
				$(".botonEmp a#menu-share + ul").css("animation", "scale-in 0.5s");
				$("#plus").html("clear");
			}else{
				menu = !menu; 
				$(".botonEmp ul").css("visibility", "hidden");
				$(".botonEmp ul").css("opacity", "0");
				$(".botonEmp a#menu-share + ul").css("visibility", "hidden");
				$("#plus").html("add");
			}
		});
	};

	return{
		ini:ini
	};

})();