let arrow = document.querySelector(".fa-angle-down");
arrow.addEventListener('click', function(){
	let items = document.querySelector('.items')
	if (items.style.display==="block") {
		items.style.display="none";
	}
	else{
		items.style.display="block";
	}
})