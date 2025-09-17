/*
Events:

resize / scroll / refresh
load / unload - da página

Mouse Events:

click / dblClick
mouseover / mouseout
contextMenu

Form/field events:

submit
focus / blur
change

Keyboard events:

keyUp
keyDown
keyPress
input

*/

const titulo = document.querySelector("h1");
// event handler - tratador de eventos
// titulo.onclick = function() {
//     // função anónima
//     // mostrar uma caixa de diálogo
//     alert("Clicou no título");
// }

// function mostraMensagem() {
//     alert("Clicou no título");
// }
// callback
// titulo.onclick=mostraMensagem;

function mostraMensagem2(mensagem) {
  alert(mensagem);
}
titulo.onclick = function () {
  mostraMensagem2("Clicou no título");
};

const elButton = document.querySelector("#btMuda");
// event listener
elButton.addEventListener("click", function () {
  titulo.classList.add("novaAparencia");
});

// let elCollapseContent=document.querySelectorAll(".collapseContent")[0];
function toggleContent() {
  // let elCollapseContent=elBtCollapse.parentElement.nextElementSibling;
  // this - referencia o elemento no qual ocorreu o evento
  let elCollapseContent = this.parentElement.nextElementSibling;
  // console.log(elCollapseContent);

  // ler o valor da propriedade "display" definido em CSS
  // let displayValue=window.getComputedStyle(elCollapseContent).getPropertyValue("display");
  // // console.log(displayValue);
  // // if (elCollapseContent.style.display==="block") {
  // if (displayValue==="block") {
  //     elCollapseContent.style.display="none";
  // } else {
  //     elCollapseContent.style.display="block";
  // }

  if (elCollapseContent.classList.contains("hide")) {
    // esconde
    elCollapseContent.classList.remove("hide");
    elBtCollapse.textContent = "Esconde";
  } else {
    // mostra
    elCollapseContent.classList.add("hide");
    elBtCollapse.textContent = "Mostra";
  }

  // elCollapseContent.classList.toggle("hide");
}
const elBtCollapse = document.getElementById("btCollapse");
elBtCollapse.addEventListener("click", toggleContent);
