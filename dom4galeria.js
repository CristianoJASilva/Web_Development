let imagesList = document.querySelectorAll(".galeria > img");
let elModal = document.querySelector("#modal");
let elCloseButton = document.querySelector("#modal  span");
const elBigImage = document.querySelector("#modal img");

for (let image of imagesList) {
  image.addEventListener("click", function () {
    elModal.style.display = "grid";
    // let image=this.src; // http://127.0.0.1:5500/galeria/Koala.jpg
    // método mais moderno
    let image = this.getAttribute("src"); // galeria/Hydrangeas.jpg
    console.log(image);
    elBigImage.setAttribute("src", image);
  });
}

elCloseButton.addEventListener("click", function () {
  elModal.style.display = "none";
});
elModal.addEventListener("click", function () {
  elModal.style.display = "none";
});
elBigImage.addEventListener("click", function (e) {
  // e, evt, event, evento
  e.stopPropagation();
});
