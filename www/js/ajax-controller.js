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

	var borrarUsuario = (id, callback)=>{
		$.ajax({
			type: "DELETE",
			dataType: "json",
			data: {id: id},
			url: "http://localhost:8000/api/user/delete"
		}).done(function(id) {
			callback(id);
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
			//guardar en cookie
			cookies.setCookie(utils.lastSearch, JSON.stringify(jsonArray));
			return callback(jsonArray);
		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	};

	var reservas = (identificador, callback)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: {id: identificador},//recuperar id de la cookie
			url: "http://localhost:8000/api/user/booking"
		}).done(function(jsonArray) {
			callback(jsonArray);
		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	};

	/************ Usuario **********/
	var getAvailable = (json, callback)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: json,
			url: "http://localhost:8000/api/user/availability",
			async: false
		}).done(function(oferta) {
			return callback(oferta);
		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	};


	/**************** EMPRESA **************/
	var insertOferta = (json, next)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: json,
			url: "http://localhost:8000/api/business/createOffer",
			async: false
		}).done(function(oferta) {
			var json = cookies.getJsonFromCookie(utils.calendarTmp);
			cookies.deleteCookie(utils.ofertaTmp);
			cookies.deleteCookie(utils.calendarTmp);
			json.oferta =  oferta.id;
			createCalendar(json);
		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	};

	var createCalendar = (json)=>{
		$.ajax({
			type: "POST",
			dataType: "json",
			data: json,
			url: "http://localhost:8000/api/business/createCalendar",
			async: false
		}).done(function(oferta) {
			contenido.feedBack("Oferta creada con exito", true);
			contenido.home();
		}).fail(function(error) {
			contenido.feedBack(JSON.stringify(error));
		});
	};

	/*********** Shared ***********/
	var getCategorias = () => {
		$.ajax({
			type: "GET",
			dataType: "json",
			url: "http://localhost:8000/api/categorias"
		}).done(function(jsonArray) { 
			//cookies.setCookie("categorias", JSON.stringify(jsonArray)); 
			utils.cargarCategorias(jsonArray);
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
		updateUser		: 		updateUser,
		createCalendar 	: 		createCalendar,
		getCategorias 	: 		getCategorias,
		getAvailable	: 		getAvailable
	};
})();
