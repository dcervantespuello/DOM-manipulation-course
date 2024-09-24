// Modificar el atributo href de un enlace
const menu = document.getElementById("menu");
const firstLink = menu.querySelector("a");

console.log(menu);
console.log(firstLink);
console.log(firstLink.href);

firstLink.href = "https://www.google.com";
console.log(firstLink.href);

// Añadir y remover una clase
const article = document.getElementById("article-2");
const articleClass = article.classList;
console.log(articleClass);

article.classList.add("highlight");
console.log(articleClass);

setTimeout(() => {
  article.classList.remove("highlight");
  console.log(articleClass);
}, 3000);

// Cambiar el valor de un atributo src
// Manipulación del atributo alt de una imagen
const image = document.getElementById("main-image");
const image2 = document.createElement("img");
image2.src =
  "https://www.dictionary.com/e/wp-content/uploads/2021/07/20210713_atw_faceExhaling_800x800-150x150.png";
image2.alt = "Imagen de emoji cansado";
image.insertAdjacentElement("afterend", image2);

// Añadir un atributo target a un enlace
const links = menu.getElementsByTagName("a");
const lastLink = links[links.length - 1];
lastLink.target = "_blank";
console.log(lastLink);

// Deshabilitar un botón
const main = document.querySelector("main");
const button = document.createElement("button");
button.textContent = "Click me!";

// La función addEventListener permite agregar varios listeners de eventos
// La propiedad onclick solo permite un listener de eventos por elemento
button.addEventListener("click", () => {
  button.disabled = true;
});
main.appendChild(button);

// Cambiar el atributo id
const title = document.getElementById("page-title");
title.id = "new-title";

// Comprobar si un atributo existe
const firstArticle = document.getElementById("article-1");

if (!firstArticle.hasAttribute("data-id")) {
  // firstArticle.setAttribute("data-id", "123");
  firstArticle.dataset.id = "123";
}

// Modificar el contenido de un atributo data-
const thirdArticle = document.getElementById("article-3");
thirdArticle.dataset.category = "456";

// Añadir un estilo directamente desde JavaScript
const footer = document.querySelector("footer");
footer.style.backgroundColor = "lightgray";
