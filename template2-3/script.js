
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

//import axios
import axios from 'axios';

/*
  Put the JavaScript code you want below.
  */


let multiplierPrice = 50;
let autoclickPrice = 100;
let counter = 0;
let multiplier = 1;
let multiplierAuto = 1;
let multiplier_2 = 0;
let autoclickNumber = 0;
//ANIMATE CSS BASIC FUNCTION
function animateCSS(element, animationName, callback) {
	const node = document.querySelector(element)
	node.classList.add('animated', animationName)

	function handleAnimationEnd() {
		node.classList.remove('animated', animationName)
		node.removeEventListener('animationend', handleAnimationEnd)

		if (typeof callback === 'function') callback()
	}

	node.addEventListener('animationend', handleAnimationEnd)
}
//==============================

document.querySelector("#cookieImg").addEventListener("click", () => {
	animateCSS('.cookieI', 'pulse');
	counter += multiplier;
});
document.querySelector("#multi").addEventListener("click", () => {
	if (counter >= multiplierPrice) {
		counter -= multiplierPrice;
		multiplier = multiplier * 2;
		multiplierPrice *= 1.5;
	}
});

document.querySelector("#autoclick").addEventListener("click", () => {
	if (counter >= autoclickPrice) {
		counter -= autoclickPrice;
		autoclickPrice *= 1.5;
		console.log('counter' + counter + 'autoclickPrice' + autoclickPrice);
		autoclickNumber++;
		console.log(autoclickNumber);
	}
});

function autoClicker() {
	if (autoclickNumber >= 1) {
		(counter += multiplier)*autoclickNumber;
	}
}

setInterval(autoClicker, 100);
function financial(x) {
	return Number.parseFloat(x).toFixed(0);
}
setInterval(function () { document.getElementById('counterP').innerHTML = financial(counter); }, 100);
setInterval(function () { document.getElementById('price').innerHTML = "Price : " + financial(multiplierPrice); }, 100);
setInterval(function () { document.getElementById('priceauto').innerHTML = "Price : " + financial(autoclickPrice); }, 100);

//facebook button
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v3.2';
	fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));




