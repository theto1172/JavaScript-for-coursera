(function () {
    "use strict";

	const pTag = document.querySelector('p');
	const btn  = document.querySelector('button');
	btn.addEventListener('click',function(){
	pTag.style.color="green";
	});
})();