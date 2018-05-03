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
			contenido.feedBack(JSON.stringify(error));
		});
	};

	var borrarUsuario = (email, callback)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: {email: email},
			url: "app/user/borrar"
		}).done(function(user) {
			callback();
		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	}

	var busqueda = (query, createBCard)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: query,
			url: "app/shared/search"
		}).done(function(jsonArray) {
			return createBCard(jsonArray);
		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	};

	var reservas = (email, createRCard)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: {email: email},
			url: "app/user/reservas"
		}).done(function(jsonArray) {
			return createRCard(jsonArray);
		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	};

	var insertOferta = (json)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: json,
			url: "app/empresa/createOferta"
		}).done(function(oferta) {

		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	};

	return{
		registro		: 		registro,
		borrarUsuario	:		borrarUsuario,
		busqueda		: 		busqueda,
		reservas		: 		reservas,
		insertOferta	: 		insertOferta
	};
})();