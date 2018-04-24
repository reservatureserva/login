var modalFiltro = (function() {

	var ini = ()=>{
		var dialog = document.querySelector('dialog');
		if (!dialog.showModal) {
			dialogPolyfill.registerDialog(dialog);
		}
		document.querySelector('#search-button').addEventListener('click', function() {
			var searchHeader = $("input[name='searchBoxHeader'").val();
			if(searchHeader!== ''){
				$("input[name='busqueda'").parent().addClass("is-dirty");
			}else{
				$("input[name='busqueda'").parent().removeClass("is-dirty");
			}
			$("input[name='busqueda'").val(searchHeader);
			dialog.showModal();
		});

		dialog.querySelector('.close').addEventListener('click', function() {
			dialog.close();
		});

		//lanzar la query
		dialog.querySelector('.buscar').addEventListener('click', function() {
			/** #### Node #### **/
			contenido.resultCards();
			dialog.close();
		});
		sliders();
	};

	var sliders = ()=>{
		$("#slider-precio").slider({
			range: true,
			min: 0,
			max: 5000,
			values: [0, 5000],
			slide: function( event, ui ) {
				var value = "Cualquier precio";
				$(".js-precio").addClass("is-dirty");
				var min = ui.values[0] + " €";
				var max = ui.values[1] > 4999 ? " o más" : " - " + ui.values[1] + " €" ;
				if(!(ui.values[0] === 0 && ui.values[1] === 5000)){
					value = min + max;                    
				}
				if(ui.values[0] === ui.values[1]){
					value = min;
				}
				$("input[name='precio']").val(value);
			}
		});


		$("#slider-distancia").slider({
			range: "min",
			step: 5,
			min: 0,
			max: 100,
			slide: function(event, ui) {
				$(".js-distancia").addClass("is-dirty");
				$("input[name='distancia']").val(ui.value > 0 && ui.value < 99 ? "menos de "+ui.value + " Km" :"Cualquier distancia");
			}
		});
	};


	return{
		ini				: 		ini,
		sliders			: 		sliders
	}
})();