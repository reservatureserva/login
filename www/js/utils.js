var utils = (function() {
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

	return{
		truncateTexts 	: 	truncateTexts,
		formatSeconds	: 	formatSeconds,
		efectoInputs	: 	efectoInputs
	}
})();