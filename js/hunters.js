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
// let items = document.querySelector(".items")
bars.addEventListener('click',function(){
	let items = document.querySelector('.items')
	if (items.style.display === "none") {
		items.style.display = "block";
		items.style.backgroundColor = "aqua";
		items.style.width = "100%"
	}
	else{
		items.style.display = "none";
	}
})