let menuIsOpen = false,									// menu
    hamburger = document.querySelector('button.menu');
hamburger.addEventListener('click', function () {
	if (menuIsOpen) {
		document.body.classList.remove('menu');
		menuIsOpen = false;
	} else {
		document.body.classList.add('menu');
		menuIsOpen = true;
	}
});




let modalButtons = document.querySelectorAll('button.modal');	// modal
for(let i = 0; i < modalButtons.length; i++) {
	modalButtons[i].addEventListener('click', function() {
		document.body.classList.add('modal');
	});
}

document.querySelector('.dark').addEventListener('click', function() {
	document.body.classList.remove('modal');
});




function childrensHeight(children) {
	let height = 0;
	for(let i in children) {
		if (typeof children[i] === 'object') {
    		height = height + children[i].offsetHeight
             	   			+ parseInt(window.getComputedStyle(children[i]).marginTop)
             				+ parseInt(window.getComputedStyle(children[i]).marginBottom);
    	}
    }
	return height
}

function setHeight(accordion, accordions) {
	for(let i = 0; i < accordions.length; i++) {
		if(!document.getElementById(accordions[i].getAttribute('for')).checked) {
			accordions[i].nextElementSibling.style.height = '';
		}
	}
	let radio = accordion.nextElementSibling,
    	isOpen = document.getElementById(accordion.getAttribute('for')).checked;
	if (isOpen) radio.style.height = childrensHeight(accordion.nextElementSibling.children) + 'px';
	else radio.style.height = '';
}

let accordions = document.querySelectorAll('.accordion > label');
if (accordions) {
	for(let i = 0; i < accordions.length; i++) {
  		let accordion = accordions[i];
    	setHeight(accordion, accordions);
	    document.getElementById(accordion.getAttribute('for')).addEventListener('change', function(e) {
	    	setHeight(accordion, accordions);
	    });
	}
}




$('.master .owl-carousel').owlCarousel({
	responsive: {
		320: {items: 2},
		740: {items: 4},
		1170: {items: 6}
	},
	nav: true,
	dots: false,
	navText: ['','']
});

$('.reviews .owl-carousel').owlCarousel({
	items: 1,
	dots: true,
	nav: true,
	navText: ['','']
});