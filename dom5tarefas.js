const elTarefa = document.querySelector("#tarefa");
const elBtCriarTarefa = document.querySelector("#btCriarTarefa");
const elListaTarefas = document.querySelector("#listaTarefas");

function criarTarefa() {
  const tarefa = elTarefa.value.trim();
  // validar o valor inserido no campo "Tarefa"
  if (tarefa === "") {
    alert("Tem de introduzir uma tarefa!");
  } else {
    // a tarefa tem de ter, no mínimo, 3 caracteres
    // validar utilização uma expressão regular
    let re = /^[A-Za-z0-9\- ]{3,}$/;
    if (!re.test(tarefa)) {
      alert("A tarefa introduzida deverá ter um mínimo de 3 caracteres");
    } else {
      const listaCorrenteTarefas =
        document.querySelectorAll("#listaTarefas > li");
      let existe = false;
      for (item of listaCorrenteTarefas) {
        if (item.textContent.toLowerCase() === tarefa.toLowerCase()) {
          existe = true;
          break;
        }
      }
      if (existe) {
        alert("A tarefa já existe!");
      } else {
        // let codigoHTML=`<li>${tarefa}</li>`;
        // elListaTarefas.innerHTML+=codigoHTML;
        let liElement = document.createElement("li");
        let conteudoLi = document.createTextNode(tarefa);
        liElement.appendChild(conteudoLi);
        elListaTarefas.appendChild(liElement);
        elTarefa.value = "";
      }
    }
  }
  elTarefa.focus();
}

elBtCriarTarefa.addEventListener("click", criarTarefa);

document.querySelector("#formTarefas").addEventListener("submit", function (e) {
  e.preventDefault();
  // criarTarefa();
});

elTarefa.addEventListener("keyup", function (e) {
  console.log(e.key);
  if (e.key === "Enter") {
    criarTarefa();
  }
});
