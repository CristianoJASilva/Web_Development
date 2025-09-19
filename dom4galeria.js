let imagesList = document.querySelectorAll(".galeria > img");
let elModal = document.querySelector("#modal");
let elCloseButton = document.querySelector("#modal span");
const elBigImage = document.querySelector("#modal img");
const elLegenda = document.querySelector("#legenda");
const elLeftArrow = document.querySelector("#leftArrow");
const elRightArrow = document.querySelector("#rightArrow");
const firstImage = imagesList[0];
const lastImage = imagesList[imagesList.length - 1];

let currentImage;

for (let image of imagesList) {
  image.addEventListener("click", function () {
    elModal.style.display = "grid";
    // let image=this.src; // http://127.0.0.1:5500/galeria/Koala.jpg
    // método mais moderno
    // let imageReference=this.getAttribute("src"); // galeria/Hydrangeas.jpg
    // console.log(imageReference); // galeria/Jellyfish.jpg
    // elBigImage.setAttribute("src",imageReference);
    // elLegenda.textContent=this.getAttribute("alt");

    // for (let image of imagesList) {
    //     if (image.getAttribute("src")===imageReference) {
    //         currentImage=image;
    //         break;
    //     }
    // }
    // currentImage=document.querySelector("[src='"+imageReference+"']");
    // currentImage=this;
    // console.log(currentImage);
    changeImage(this);
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

function changeImage(nextImage) {
  let imageReference = nextImage.getAttribute("src");
  elBigImage.setAttribute("src", imageReference);
  elLegenda.textContent = nextImage.getAttribute("alt");
  currentImage = nextImage;
}

elLeftArrow.addEventListener("click", function (e) {
  e.stopPropagation();
  let nextImage;
  if (currentImage !== firstImage) {
    nextImage = currentImage.previousElementSibling;
  } else {
    nextImage = lastImage;
  }
  // console.log(nextImage);
  changeImage(nextImage);
});
elRightArrow.addEventListener("click", function (e) {
  e.stopPropagation();
  let nextImage;
  if (currentImage !== lastImage) {
    nextImage = currentImage.nextElementSibling;
  } else {
    nextImage = firstImage;
  }
  // console.log(nextImage);
  changeImage(nextImage);
});
