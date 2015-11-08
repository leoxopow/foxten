$(function(){
	$('.allTask').bxSlider({
		controls: false
	});
	var slideRange = $('#slider-range');
	slideRange.slider({
		range: true,
		min: 0,
		max: 500,
		values: [75, 300],
		slide: function(event, ui){
			$('#minRange').val(ui.values[0]);
			$('#maxRange').val(ui.values[1]);
		}
	});
	$('#minRange').val(slideRange.slider('values', 0));
	$('#maxRange').val(slideRange.slider('values', 1));
})