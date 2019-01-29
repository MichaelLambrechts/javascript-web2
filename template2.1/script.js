
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";



/*
  Put the JavaScript code you want below.
  */

let img = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10', 'img11', 'img12'];
function loadImage() {
  for (let i = 0; i < 12; i++) {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://aws.random.cat/meow', true);
      request.onload = function loadImage() {
      var data = JSON.parse(this.response);
      var image = document.getElementById(img[i]);
      var new_image = new Image();
      new_image.src = data.file;
      image.src = new_image.src;
    }
    request.send();
  }
}
document.querySelector("#button").addEventListener("click", () => {
    loadImage();

});
