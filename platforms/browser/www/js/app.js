var app = (function() {
	var ini = ()=>{
		var user = firebase.auth().currentUser;
		contenido.ini();
		if (user) {
			var user = cookies.getJsonFromCookie(utils.userCookieName) || peticionesAJAX.login(user.email);
			contenido.home(user);
		} else {
			contenido.login();
		}
	};
	return{
		ini : ini
	};
})();