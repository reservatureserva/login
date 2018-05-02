var createOfertaCo = (function() {
	var ini = ()=>{
		//Crea una nueva oferta
		$('#btn-crear').click(function() {
			crearOferta();
		});
	};
	var crearOferta = ()=>{
		var json = {
			titulo 		: $("form[name='createOferta'] input[name='nombre-oferta']").val(),
			categoria	: $("form[name='createOferta'] input[name='categoria'][type='hidden']").val(),
			precio_base	: $("form[name='createOferta'] input[name='precio-oferta']").val(),
			descripcion : $("form[name='createOferta'] textarea[name='descripcion-oferta']").val()
		};
		console.log(json);


	};

	return{
		ini						: 			ini
	}

})();