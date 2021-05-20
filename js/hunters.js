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

let bars = document.querySelector(".fa-bars");
// let items = document.querySelector(".mainLink")
bars.addEventListener('click',function(){
	let mainLink = document.querySelector('.mainLink')
	if (mainLink.style.display === "none") {
		mainLink.style.display = "block";
		mainLink.style.backgroundColor = "aqua";
		mainLink.style.width = "full";
	}
	else{
		mainLink.style.display = "none";
	}
})