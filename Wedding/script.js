
let restaurant = document.querySelector(".restaurant");
let titel3 = document.querySelector('#nomad')
restaurant.addEventListener("mouseover", voeg)
restaurant.addEventListener("mouseout", weg)
function voeg() {
  console.log("ok");
  let tekst3 = this.getAttribute("data-text")
  titel3.innerHTML = tekst3;
}
function weg() {
  console.log("yay");
  let tekst3 = this.getAttribute("")
  titel3.innerHTML = tekst3;
}
