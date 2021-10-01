var links = [""];
var result = document.getElementById("result");
var nwImg = document.getElementById("url");
var i = 0;
do {
  result.innerHTML += "<img src=" + links[i] + ">";
  i++;
} while (i < links.length);

function AddLink() {
  var result = document.getElementById("result");
  var nwImg = document.getElementById("url").value;


  if (links.includes(nwImg)) {
    document.body.innerHTML += "<p> Este filme já foi adicionado! </p>";
  } else {
    links.push(nwImg);
    do {
      result.innerHTML += "<img src=" + links[i] + ">";
      i++;
    } while (i < links.length);
  }
}