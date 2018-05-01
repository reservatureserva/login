var createOfertaCo = (function() {
	var ini = ()=>{
		//Crea una nueva oferta
		$('#btn-crear').click(function() {
			crearOferta();
		});
	};
	var createJSON = (nombre, categoria, precio, descripcion)=>{
		var json = {
			"titulo":nombre,
			"categoria":categoria,
			"precio_base":precio,
			"descripcion":descripcion
		}
		console.log(json);
	};
	var crearOferta = ()=>{
		var nombre = $("input[name='servicio']").val();
		var categoria = $("input[name='cat'][type='hidden']").val();
		var precio = $("input[name='pre']").val();
		var descripcion = $("textarea[name='desc']").val();
		createJSON(nombre, categoria, precio, descripcion);


	};

	return{
		ini						: 			ini
	}

})();