var countOfPagesScrolled = 5;

function scrollDown(height, countOfPagesScrolled){
	scroll(0, document.body.clientHeight);
	setTimeout(function(){
		if(height != document.body.clientHeight && countOfPagesScrolled > 0){
			scrollDown(document.body.clientHeight, --countOfPagesScrolled);
		}else
			return sendRequest();
	}, 1500);
}

function sendRequest(){
	var contactsNum = 0;
	jQuery.each( $('.button-secondary-small'), 	function() {
		contactsNum++;
		$(this).click();
		console.log($(this).attr('title') + ' ' + contactsNum);
	});
	console.log('Just added contacts: ' + contactsNum);
}

scrollDown(document.body.clientHeight, countOfPagesScrolled);
