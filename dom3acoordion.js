// esconder todos os conteúdos menos o primeiro
const listContents = document.querySelectorAll(".accordion > section");
for (let i = 1; i < listContents.length; i++) {
  listContents[i].classList.add("hide");
}

const titleList = document.querySelectorAll(".accordion > h2");
// console.log(titleList);
// titleList.addEventListener("click", function() {
//     console.log("Clicou");
// });
// titleList[0].addEventListener("click", function() {
//     console.log("Clicou no primeiro");
// });
// titleList[1].addEventListener("click", function() {
//     console.log("Clicou no segundo");
// });
for (let title of titleList) {
  title.addEventListener("click", function () {
    // let elCollapseContent=title.nextElementSibling;
    // let elCollapseContent=this.nextElementSibling;
    // elCollapseContent.classList.toggle("hide");
    this.nextElementSibling.classList.toggle("hide");
    for (let title of titleList) {
      if (title !== this) {
        title.nextElementSibling.classList.add("hide");
      }
    }
  });
}
