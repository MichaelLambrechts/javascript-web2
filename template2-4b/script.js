
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
'use strict';

//import axios
import axios from 'axios';
import { async } from "q";


/*
  Put the JavaScript code you want below.
  */

// L'OBJET EST DANS CE CAS CI ---->0<-----

const modalString = '<div class="modal-dialog"><div class="modal-content"><!-- Modal Header --><div class="modal-header"><h4 class="modal-title">Modal Heading</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><!-- Modal body --><div class="modal-body">Modal body..</div><!-- Modal footer --><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button></div></div></div>'




let getName = "";
let getDesc = "";
let getImg = "";
let table = [];
async function getData() {
  let response = await axios.get('https://character-database.becode.xyz/characters');
  let getName = await response.data.name;
  table = await response.data;

}

async function putData(tableT) {

  let ulElement = document.createElement("ul");
  ulElement.setAttribute("id", "myUl");
  document.getElementById("newContent").appendChild(ulElement);
  for (let i = 0; i < tableT.length; i++) {
    let liElement = await document.createElement("li");
    document.getElementById("myUl").appendChild(liElement);
    liElement.setAttribute("id", "id" + i);
    document.getElementById("id" + i).innerHTML = await "<h2>" + tableT[i].name + "</h2>" + "<p>" + tableT[i].shortDescription + "</p>";
    //image
    let imgElement = await document.createElement("img");
    await document.getElementById("id"+i).appendChild(imgElement);
    await imgElement.setAttribute("id", "idimg" + i);
    await imgElement.setAttribute('src', 'data:image/jpeg;base64,' + table[i].image);
  }

  



}
async function menu() {
  await getData(table);
  console.log(table);
  await putData(table);
  console.log("ah");
}
menu();
/*
function addModal(){
        document.getElementsByTagName('li').innerHTML = '<div class="modal-dialog"><div class="modal-content"><!-- Modal Header --><div class="modal-header"><h4 class="modal-title">Modal Heading</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><!-- Modal body --><div class="modal-body">Modal body..</div><!-- Modal footer --><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button></div></div></div>';
}

addModal();*/