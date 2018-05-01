var utils = (function() {
	var truncateTexts = ()=>{
		var texts = $(".truncate");
		for(var i = 0; i < texts.length; i++){
			$clamp(texts[i], {clamp: 3});
		}
	};
	return{
		truncateTexts : truncateTexts
	}
})();