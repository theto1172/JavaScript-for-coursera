(function(){
	const myDiv = document.querySelector('div');
	const btnAdd = document.querySelectorAll('button')[0];
	const btnDelete = document.querySelectorAll('button')[1];
	let numOfPtag = 1;
	btnAdd.addEventListener('click',function(){
		numOfPtag++;
		const newP = document.createElement('p');
		newP.textContent = 
		`This is paragraph number ${numOfPtag}.`;
        myDiv.appendChild(newP);
    btnDelete.addEventListener('click',function(){
    	if (numOfPtag>1) {
    		myDiv.removeChild(myDiv.children[numOfPtag-1]);
    		numOfPtag--;
    	}
    	else{
    		alert("Don't delete the last paragraph.");
    	}   	



    });
        




	});



})();