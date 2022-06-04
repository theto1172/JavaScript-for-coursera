(function(){
	"use strict"
const divTag = document.querySelector('div');
const btnAdd = document.querySelectorAll('button')[0];
const btnDelete = document.querySelectorAll('button')[1];
btnAdd.addEventListener('click',function(){
	let newP = document.createElement('p');
	newP.textContent='Here is a new paragraph';
	divTag.appendChild(newP);

});

btnDelete.addEventListener('click',function(){
	const allPs = document.querySelectorAll('p');
	divTag.removeChild(divTag.children[allPs.length-1]);


});







})();