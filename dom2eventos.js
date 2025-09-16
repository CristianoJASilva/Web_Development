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
