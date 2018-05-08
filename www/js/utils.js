var utils = (function() {
	const userCookieName = "userLoggedData";
	const imageCookieName = "imageBase";

	var truncateTexts = ()=>{
		var texts = $(".truncate");
		for(var i = 0; i < texts.length; i++){
			$clamp(texts[i], {clamp: 3});
		}
	};

	var formatSeconds = (seconds)=>{
		var date = new Date(seconds*1000);
		return date.getUTCDate() + '/' + (date.getUTCMonth() + 1)+ '/' + date.getUTCFullYear();
	};

	var efectoInputs = ()=>{
		if(!(typeof(componentHandler) == 'undefined')){
			componentHandler.upgradeAllRegistered();
		}
	};

	var dataOK = (json)=>{
		for(var key in json){
			var data = json[key];
			if(data === undefined || data === null || data == ""){
				contenido.feedBack("Has de rellenar el campo "+key);
				return false;
			}
		}
		return true;
	};

	var abrir = (dia) => {
		var day = $(dia).attr("name");
		var td = $($(dia).parents("tr:first").find("td:last")[0]).html('<input type="time" name="' + day + '1"> - <input type="time" name="' + day + '2">');
		console.log(dia);
	};
	var cerrar = (dia) => {
		var day = $(dia).attr("name");
		var td = $($(dia).parents("tr:first").find("td:last")[0]).html('Cerrado');
		console.log(dia);
	};
	var dividir = (dia) => {
		var day = $(dia).attr("name");
		var td = $($(dia).parents("tr:first").find("td:last")[0]).html('<input type="time" name="' + day + '1"> - <input type="time" name="' + day + '2">     <input type="time" name="' + day + '3"> - <input type="time" name="' + day + '4">');
		console.log(dia);
	};

	var getSunday = ()=>{
		var date = new Date();
		var day = date.getDay() || 7; 
		if( day !== 7 ){
			date.setHours(-24 * (day - 7));			
		}
		date.setHours(23);
		date.setMinutes(59);
		date.setSeconds(59);
		return date;
	}

	var getMonday = ()=>{
		var date = new Date();
		var day = date.getDay() || 7; 
		if( day !== 1 ) {
			date.setHours(-24 * (day - 1));
		}
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		return date;

	};

	var encode64 = (str)=>{
		return window.btoa(str);
	};

	var decode64 = (cripted)=>{
		return window.atob(cripted);
	};

	var imgToBase64 = (image)=>{
		if (image && image.files[0]) {
			$("btn").attr("disabled", "true");
			$("btn").css("background-color", "#cccccc");
			$("input[type='file']").attr("disabled", "true");
			var reader  = new FileReader();

			reader.onloadend = function () {
				cookies.setCookie(utils.imageCookieName, reader.result);
				$("btn").removeAttr("disabled");
				$("btn").css("background-color", "#30a7ba");
				$("input[type='file']").removeAttr("disabled");
			}
			reader.readAsDataURL(image.files[0]);
		} 
	};




	return{
		truncateTexts 	: 	truncateTexts,
		formatSeconds	: 	formatSeconds,
		efectoInputs	: 	efectoInputs,
		dataOK			: 	dataOK,
		abrir			: 	abrir,
		cerrar			: 	cerrar,
		dividir			: 	dividir,
		getSunday		: 	getSunday,
		getMonday		: 	getMonday,
		encode64 		: 	encode64,
		decode64		: 	decode64,
		userCookieName  : 	userCookieName,
		imgToBase64		: 	imgToBase64,
		imageCookieName : 	imageCookieName
	}
})();