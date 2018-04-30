var modalFiltro = (function() {

	var ini = ()=>{
		var dialog = document.querySelector('dialog');
		if (!dialog.showModal) {
			dialogPolyfill.registerDialog(dialog);
		}

		$(".search-button").click(function() {
			showModal(dialog);
		});

		$("form[name='navBarForm']").submit(function() {
			showModal(dialog);
			return false;
		});



		dialog.querySelector('.cancelar').addEventListener('click', function() {
			dialog.close();
		});

		//lanzar la query
		dialog.querySelector('.buscar').addEventListener('click', function() {
			/** #### Node #### **/
			procesarBusqueda();
			contenido.resultCards();
			dialog.close();
		});
		sliders();
	};

	var showModal = (dialog)=>{
		var searchHeader = $("input[name='searchBoxHeader'").val();
		if(searchHeader!== ''){
			$("input[name='busqueda'").parent().addClass("is-dirty");
		}else{
			$("input[name='busqueda'").parent().removeClass("is-dirty");
		}
		$("input[name='busqueda'").val(searchHeader);
		dialog.showModal();
	};

	var sliders = ()=>{
		$("#slider-precio").slider({
			range: true,
			min: 0,
			max: 5000,
			values: [0, 5000],
			slide: function( event, ui ) {
				var value = "Cualquier precio";
				var realValue = -1;
				$(".js-precio").addClass("is-dirty");
				var min = ui.values[0] + " €";
				var max = ui.values[1] > 4999 ? " o más" : " - " + ui.values[1] + " €" ;
				if(!(ui.values[0] === 0 && ui.values[1] === 5000)){
					value = min + max;
					realValue = ui.values[0] + ", " + ui.values[1];
				}
				if(ui.values[0] === ui.values[1]){
					value = min;
					realValue = ui.values[0];
				}
				$("input[name='precio'][type='text']").val(value);
				$("input[name='precio'][type='hidden']").val(realValue);
			}
		});


		$("#slider-distancia").slider({
			range: "min",
			step: 5,
			min: 0,
			max: 100,
			slide: function(event, ui) {
				var realValue = -1;
				$(".js-distancia").addClass("is-dirty");
				$("input[name='distancia'][type='text']").val(ui.value > 0 && ui.value < 99 ? "menos de "+ui.value + " Km" :"Cualquier distancia");
				$("input[name='distancia'][type='hidden']").val(ui.value > 0 && ui.value < 99 ? ui.value : realValue);
			}
		});
	};

	var procesarBusqueda = ()=>{
		var json = {
			busqueda: 		$("form[name='dialog'] input[name='busqueda']").val(),
			categoria: 		$("form[name='dialog'] input[name='categoria']").val(),
			precio: 		$("form[name='dialog'] input[name='precio'][type='hidden']").val(),
			distancia: 		$("form[name='dialog'] input[name='distancia'][type='hidden']").val(),
			ordenar: 		$("form[name='dialog'] input[name='ordenar']").val()
		};
		peticionesAJAX.busqueda(json, contenido.resultCards);
	};


	return{
		ini				: 		ini,
		sliders			: 		sliders
	}
})();