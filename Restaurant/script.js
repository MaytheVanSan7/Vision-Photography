
let wedding = document.querySelector(".wedding");
let titel2 = document.querySelector('#wedding')
wedding.addEventListener("mouseover", voegtoe)
wedding.addEventListener("mouseout", verwijder)
function voegtoe() {
  console.log("ok");
  let tekst2 = this.getAttribute("data-text")
  titel2.innerHTML = tekst2;
}
function verwijder() {
  console.log("yay");
  let tekst2 = this.getAttribute("")
  titel2.innerHTML = tekst2;
}
