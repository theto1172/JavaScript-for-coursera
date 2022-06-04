(function(){
	const myDiv = document.querySelector('div');
	const btn = document.querySelector('button');
	btn.addEventListener('click',function(){
		let newP = document.createElement('p');
		newP.textContent = "Here is a new paragraph";
		myDiv.appendChild(newP);


	});


})();