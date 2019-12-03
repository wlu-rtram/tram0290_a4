function on(imgURL) {
  document.getElementById("myImage").src = imgURL;
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
