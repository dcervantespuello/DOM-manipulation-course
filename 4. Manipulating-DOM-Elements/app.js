//Modificar el valor de className
const title = document.getElementById("main-title");
title.className = "new-title";

//Cambiar los estilos del párrafo
const paragraph = document.querySelector(".description");
paragraph.style.color = "red";

//Agregar un evento click
const button = document.getElementById("action-button");
button.addEventListener("click", () => {
  alert("Botón clicado");
});

//Usar los métodos de classList
const list = document.getElementsByClassName("item");
list[0].classList.add("highlight");
list[1].classList.remove("highlight");

if (!list[2].classList.contains("highlight")) {
  list[2].classList.add("highlight");
} else {
  list[2].classList.toggle("highlight");
}

//Insertar un nuevo elemento
const newParagraph = document.createElement("p");
newParagraph.textContent = "Subtítulo de la página";
title.insertAdjacentElement("afterend", newParagraph);

//Modificar el contenido con innerHTML
list[0].innerHTML = "<strong>Elemento Modificado</strong>";

//Crear un nuevo elemento con createElement
const item = document.createElement("li");
item.textContent = "Nuevo elemento de la lista";

const list2 = document.getElementById("item-list");
list2.append(item);

//Usar append y prepend
const paragraph1 = document.createElement("p");
const paragraph2 = document.createElement("p");
paragraph1.textContent = "Este es el principio";
paragraph2.textContent = "Este es el final";

const container = document.getElementById("container");
container.prepend(paragraph1);
container.append(paragraph2);

//Insertar elementos antes y después
const zero = document.createElement("li");
const five = document.createElement("li");
zero.textContent = "Elemento 0";
five.textContent = "Elemento 5";

list2.firstElementChild.before(zero);
list2.lastElementChild.after(five);

//Eliminar elementos
list2.removeChild(list2.lastElementChild);
button.remove();

//Clonar un nodo
const clone = list2.firstElementChild.cloneNode(true);
list2.append(clone);

//Reemplazar un nodo
const replacement = document.createElement("p");
replacement.textContent = "Descripción modificada";
paragraph.replaceWith(replacement);
