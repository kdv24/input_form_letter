$(document).ready(function() {
	$('#blanks form').submit(function(event) {
		var firstNameInput = $("input#firstName").val();
		var lastNameInput = $("input#lastName").val();
		var addressInput = $("input#address").val();
		var cityInput = $("input#city").val();
		var stateInput = $("input#state").val();
		var zipInput = $("input#zip").val();	
		var exclamationInput = $("input#exclamation").val();
		var noun3Input = $("input#noun3").val();		

		$('.firstName').text(firstNameInput);
		$('.lastName').text(lastNameInput);
		$('.address').text(addressInput);
		$('.city').text(cityInput);
		$('.state').text(stateInput);
		$('.zip').text(zipInput);
		$('.exclamation').text(exclamationInput);
		$('.noun3').text(noun3Input);


		$('#formLetter').show();
		event.preventDefault();
		})
});