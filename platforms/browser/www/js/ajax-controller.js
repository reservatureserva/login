var peticionesAJAX = (function() {
	var registro = (json, callback)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: json,
			url: "app/user/register"
		}).done(function(user) {
			//registrar en Firebase
			callback();
		}).fail(function(error) {
			contenido.feedBack(error);
		});
	};

	var borrarUsuario = (email, callback)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: json,
			url: "app/user/borrar"
		}).done(function(user) {
			//registrar en Firebase
			callback();
		}).fail(function(error) {
			contenido.feedBack(error);
		});
	}

	var busqueda = (json, callback)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: json,
			url: "app/shared/search"
		}).done(function(jsonArray) {
			//registrar en Firebase
			return callback(jsonArray);
		}).fail(function(error) {
			contenido.feedBack(error);
		});
	};

	return{
		registro		: 		registro,
		borrarUsuario	:		borrarUsuario,
		busqueda		: 		busqueda
	};
})();