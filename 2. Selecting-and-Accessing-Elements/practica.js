// Seleccionar y manipular hijos
const parent = document.getElementById("parent");
const children = parent.children;

console.log("Parent");
console.log(parent);
console.log("Children");
console.log(children);

const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;

console.log("First Child");
console.log(firstChild);
console.log("Last Child");
console.log(lastChild);

// Navegación entre hermanos
const previousSibling = parent.previousElementSibling;
const nextSibling = parent.nextElementSibling;

console.log("Previous Sibling");
console.log(previousSibling);
console.log("Next Sibling");
console.log(nextSibling);

// Agregar y verificar elementos dinámicos
const main = document.getElementById("principal");
let sections = main.children;
console.log("Sections before: " + sections.length);

const section = document.createElement("section");
main.appendChild(section);
console.log("Sections later: " + sections.length);

// Obtener padres
const child = document.querySelector("li");
const parent2 = child.parentElement;

console.log("Parent Element");
console.log(parent2);

const grandParent = child.closest("menu");
console.log("Closest menu");
console.log(grandParent);
