var createButton = $('.create_event');
var closeButton = $('.create_event_close');


closeButton.click(function(){
	document.getElementById("create_event_form").reset();
});

createButton.click(function(){

	if($('#event_form_title').val() != "") {
		lfg.addEvent('createdEvent', [
			$('#event_form_title').val(),
			$('#event_form_description').val(),
			$('#event_form_tags').val().split(','),
			lfg.distance,
			Date.now() - 60,
			user
		]);
	}

	document.getElementById("create_event_form").reset();
});