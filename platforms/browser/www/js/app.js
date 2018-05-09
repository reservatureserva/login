var app = (function() {
	var ini = ()=>{
		var user = firebase.auth().currentUser;
		contenido.ini();
		if (user) {
			var cookieUser = cookies.getJsonFromCookie(utils.userCookieName);
			if(cookieUser){
				contenido.home(cookieUser);				
			}else{
				peticionesAJAX.login(user.email, contenido.home);
			}
		} else {
			contenido.login();
		}
	};
	return{
		ini : ini
	};
})();