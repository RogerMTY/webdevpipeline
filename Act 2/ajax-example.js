function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "ajax.txt");
    xhttp.send();
}

function loadImage() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
      var newimg = new Image();
      newimg.src = this.responseURL;
      document.getElementById("demo").innerHTML = "";
      document.getElementById("demo").appendChild(newimg);
    }
    xhttp.open("GET", "bingus.jpg")
    xhttp.send();
}

function loadHTML(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
      document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "2.html")
    xhttp.send();
}