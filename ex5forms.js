let elFormUtilizador = document.querySelector("#formCreateUser");
const fNome = document.querySelector("#nome");
const fNomeError = document.querySelector("#nameFieldError");

// Tipos de validação
/*
- quando se está dentro do campo (evento keyup ou input)
- quando saimos do campo (evento blur)
- quando o utilizador submete o formulário
*/
/*
Eventos específicos dos formulários:

submit
reset
focus
blur
input
keydown
keypress
keyup
change
select
*/

function validateEMailField() {}

function validateNameField() {
  if (fNome.value.length < 5) {
    // alert("O 'nome' tem de ter 5 ou mais caracteres.");
    fNomeError.textContent = "O 'nome' tem de ter 5 ou mais caracteres.";
    fNome.classList.add("invalidField");
    // colocar o cursor no campo - dispara o evento focus no campo
    // fNome.focus();
  } else {
    fNomeError.textContent = "";
    fNome.classList.remove("invalidField");
  }
}

function validateFormCreateUser() {
  validateNameField();
}

function formCreateUserSubmit(e) {
  e.preventDefault();
  validateFormCreateUser();
}

elFormUtilizador.addEventListener("submit", formCreateUserSubmit);

// evento disparado quando o utilizador sai do campo 'Nome'
fNome.addEventListener("blur", function () {
  validateNameField();
});
// evento disparado sempre que o utilizador escreve um caracter no campo 'Nome'
fNome.addEventListener("input", function () {
  validateNameField();
});
