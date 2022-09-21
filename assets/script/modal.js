const modal = document.getElementById("modal");
const btSubscribe = document.getElementById("bt-subscribe");

btSubscribe.onclick = function() {
  modal.style.display = "flex";
}

window.onclick = function(event) {
  if(event.target == modal) {
    modal.style.display = "none";
  }
}
