/*
Métodos para referenciar um node na DOM API

getElementById - utiliza o atributo id - retorna apenas um único node
document.getElementById("especial")

getElementsByTagName - utiliza o nome do elemento (tag) - returna uma node list (HTMLCollection), isto é, um array (array like) de nodes
document.getElementsByTagName("p")[0]

getElementsByName - utiliza o atributo "name" - específico dos campos de um formulário

getElementsByClassName - utiliza o atributo class - referencia uma classe CSS
document.getElementsByClassName("destaque")

Métodos baseados em selectores CSS

querySelector() - extrai apenas um node
document.querySelector("#especial")
document.querySelector(".destaque")
document.querySelector("p")

querySelectorAll() - returna uma node list (HTMLCollection), isto é, um array (array like) de nodes 
document.querySelectorAll("#especial")[0]
document.querySelectorAll(".destaque")[0]
document.querySelectorAll("p")[0]

*/

console.log(document.getElementsByTagName("p")[0]);
console.log(document.getElementsByTagName("p")); // retorna um array com 1 elemento
console.log(document.querySelectorAll("#especial")[0]);
const paragrafo = document.querySelectorAll("#especial")[0];

// manipular o node/elemento

// extrair o conteúdo de um elemento
console.log(paragrafo.textContent);
// definir o conteúdo de um elemento
paragrafo.textContent = "Novo conteúdo";

// interagir com CSS

// sintaxe:
// ler
// referencia_ao_elemento.style.propriedade
// alterar
// referencia_ao_elemento.style.propriedade=valor
// as propriedades são escritas utilizando camel notation
// ex: background-color transforma-se em backgroundColor
// ex: border-top-color transforma-se em borderTopColor
// document.getElementById("especial").style.backgroundColor="red";
// document.getElementById("especial").style.color="white";
// paragrafo.style.fontSize="3rem";

// aplicar a classe ao elemento
// sintaxe antiga - substitui todas as classes actualmente atribuídas ao elemento
// paragrafo.className="novaAparencia";
// para evitar este problema
// paragrafo.className+=" novaAparencia"; // resultado: class="destaque novaAparencia"
// alternativa moderna
// adicionar a classe à lista de classes do elemento
paragrafo.classList.add("novaAparencia"); // resultado: class="destaque novaAparencia"
// remover uma classe
paragrafo.classList.remove("destaque"); // resultado: class="novaAparencia"
// testar se um elemento possui uma determinada classe aplicada
console.log(paragrafo.classList.contains("destaque")); // false
