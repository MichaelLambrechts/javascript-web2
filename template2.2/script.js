
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

//loadBeer();

let beer = ["beer1", "beer2", "beer3", "beer4", "beer5", "beer6"];
let hname = ["hname1", "hname2", "hname3", "hname4", "hname5", "hname6"];
let ptag = ["ptag1", "ptag2", "ptag3", "ptag4", "ptag5", "ptag6"];
let pyear = ["pyear1", "pyear2", "pyear3", "pyear4", "pyear5", "pyear6"];
let imgB = ["img1", "img2", "img3", "img4", "img5", "img6"];


// L'OBJET EST DANS CE CAS CI ---->0<-----

for (let i = 0; i < 6; i++) {
  axios.get('https://api.punkapi.com/v2/beers/random')
    .then(function (response) {
      console.log(response.data[0].name);
       
      
    });
}