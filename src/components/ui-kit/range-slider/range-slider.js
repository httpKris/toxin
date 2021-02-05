$(function () {
	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 16000,
		values: [5000, 10000],
		slide: function (_event, ui) {
			$("#amount").val(ui.values[0] + "₽" + " - " + ui.values[1] + "₽");
		}
	});
	$("#amount").val((($("#slider-range").slider("values", 0)+ "₽") +
		" - " + ($("#slider-range").slider("values", 1) + "₽")).replace(/\B(?=(\d{3})+(?!\d))/g, " "))
	
});

// календарь
// var minDate = -20;
// var maxDate = "+1M +10D" 

// $('body').on('focus',".datepicker", function(){
//     $(this).datepicker({ minDate: minDate, maxDate: maxDate },{dateFormat: "dd/mm/yy"});
// });