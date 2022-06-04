(function(){
	const h1Tage = document.querySelector('h1');
	const myForm = document.querySelector('form');
	myForm.addEventListener('submit',function(event){
		event.preventDefault();
		const myNum =
		 parseInt(document.querySelector('input').value);
		 if(myNum){
		 	h1Tage.style.fontSize=myNum + "px";
		 }
		 else{
            alert('Please enter a number!');
		 }


	});
})();