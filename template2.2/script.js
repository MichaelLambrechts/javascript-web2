
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





// L'OBJET EST DANS CE CAS CI ---->0<-----
function createBeer() {
  for (let i = 0; i < 12; i++) {
    axios.get('https://api.punkapi.com/v2/beers/random')
      .then(function (response) {
        let table = [];
        table[i] = i;

        //Creation de div
        let newDiv = document.createElement("div");
        //Affecte un attribut classe
        newDiv.id = table[i];
        //
        document.getElementById('contentID').appendChild(newDiv);

        //creation de p
        let newP = document.createElement("p");
        document.getElementById(i).appendChild(newP);
        //ajout du nom
        let newName = document.createTextNode(response.data[0].name);
        newP.appendChild(newName);

        //creation P du tagline
        let newP2 = document.createElement("p");
        document.getElementById(i).appendChild(newP2);

        //ajout du tagline
        let newTag = document.createTextNode(response.data[0].tagline);
        newP2.appendChild(newTag);

        //creation P de l'année
        let newP3 = document.createElement("p");
        document.getElementById(i).appendChild(newP3);
        //ajout de l'année
        let newYear = document.createTextNode(response.data[0].first_brewed);
        newP3.appendChild(newYear);

        //creation IMG
        let newImg = document.createElement("img");
        newImg.src = response.data[0].image_url;
        newImg.alt = "beer image";
        document.getElementById(i).appendChild(newImg);

      });

  }
}
createBeer();