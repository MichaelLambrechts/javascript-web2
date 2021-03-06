
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/


//import axios
import axios from 'axios';
/*
  Put the JavaScript code you want below.
  */

// L'OBJET EST DANS CE CAS CI ---->0<-----

/*async function getData() {
  await axios.get('https://character-database.becode.xyz/characters').then(function async (response) {
  let newContent =  document.getElementById("newContent"); 
  let displayUL = document.createElement("ul");
  newContent.appendChild(displayUL);

        for (let i = 0; i < 100; i++) {
        let displayLI = document.createElement("li");
        displayUL.appendChild(displayLI);
        let idLI = [i];
        displayLI.setAttribute("id", idLI);
        
        let getName = response.data[i].name;
        let getDesc = response.data[i].shortDescription;
        let getImg = response.data[i].image;
        console.log(getImg);
        document.getElementById(i).innerHTML =  i + "<h2>"+ getName + "</h2>" + getDesc + '<img src="data:image/jpeg;base64,' + getImg + '" alt="representative image">';
      }
    })
}
getData();*/


//===========THE MODAL========

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);