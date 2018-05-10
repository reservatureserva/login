var peticionesAJAX = (function() {
	var login = (email, next)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: {email : email},
			url: "http://localhost:8000/api/user/profile",
			async: false
		}).done(function(user) {
			if(user.message){
				contenido.feedBack(user.message);
				return;
			}
			//actualizo la cookie
			cookies.setJsonInCookie(utils.userCookieName, user);
			//redirijo al perfil
			return next(user);
		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	};

	var registro = (json, callback)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: json,
			url: "http://localhost:8000/api/user/register",
			async: false
		}).done(function(user) {
			if(user.message){
				contenido.feedBack(user.message);
				return;
			}
			//registrar en Firebase
			callback(user);
		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	};

	var updateUser = (json, callback)=>{
		$.ajax({
			type: "PUT",
			dataType: "json",
			data: json,
			url: "http://localhost:8000/api/user/update",
			async: false
		}).done(function(user) {
			if(user.message){
				contenido.feedBack(user.message);
				return;
			}else{
				cookies.setJsonInCookie(utils.userCookieName, user);
				location.reload();
			}
		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	}

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

	var busqueda = (query, callback)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: query,
			url: "http://localhost:8000/api/search"
		}).done(function(jsonArray) {
			return callback(jsonArray);
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

	var getAvailable = (json)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: json,
			url: "http:/localhost:8000/api/business/createOffer"
		}).done(function(oferta) {

		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	};

	var insertOferta = (json, next)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: json,
			url: "http:/localhost:8000/api/business/createOffer",
			async: false
		}).done(function(oferta) {
			return oferta.id;
		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	};

	var createCalendar = (json)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: json,
			url: "http:/localhost:8000/api/business/createCalendar"
		}).done(function(oferta) {
			contenido.feedBack("Oferta creada con exito");
		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	};

	return{
		login			: 		login,
		registro		: 		registro,
		borrarUsuario	:		borrarUsuario,
		busqueda		: 		busqueda,
		reservas		: 		reservas,
		insertOferta	: 		insertOferta,
		updateUser		: 		updateUser
	};
})();
