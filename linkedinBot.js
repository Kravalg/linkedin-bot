window.height = document.body.clientHeight;
window.num = 0;
function scrollDown(height){
	scroll(0, document.body.clientHeight);
	setTimeout(function(){
		if(window.height != document.body.clientHeight){
			window.height = document.body.clientHeight;
			scrollDown(document.body.clientHeight);
		}else
			return sendRequest();
	}, 1500);
}

function sendRequest(){
	jQuery.each( $("div.card-wrapper > button:nth-child(2)"), 	function() {
		window.num++;		
		$(this).click();
		console.log($(this).attr('title')+' '+window.num);
	});
}

scrollDown(window.height);
