(function(){
	const bodyTag= document.querySelector('body');
	document.addEventListener('keydown',function(event){
		const keyPressed = event.which;
		switch(keyPressed){
			case 66: bodyTag.className="one";break;
			case 86: bodyTag.className="two";break;
			case 67: bodyTag.className="three";break;
			case 70: bodyTag.className="four";break;
			case 71: bodyTag.className="five";break;
			default: alert("You didn't press one of the specified keys!");

		}



	});


})();