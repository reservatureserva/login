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

	var borrarUsuario = (callback)=>{
		$.ajax({
			type: "DELETE",
			dataType: "json",
			data: {id: id},
			url: "app/user/delete"
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

	var reservas = (createRCard)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: {id: $.coockie("user")},//recuperar id de la cookie
			url: "app/user/booking"
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
			url: "app/empresa/createOffer"
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
