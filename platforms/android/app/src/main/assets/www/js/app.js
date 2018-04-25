var app = (function() {
	var ini = ()=>{
		var user = firebase.auth().currentUser;
		contenido.ini();
		if (user) {
			contenido.home();
		} else {
			contenido.login();
		}
	};

	return{
		ini : ini
	};
})();