// addEventListener: mouseover, mouseout
const text1 = document.getElementById("text1");

text1.addEventListener("mouseover", () => {
  text1.style.backgroundColor = "red";
});

text1.addEventListener("mouseout", () => {
  text1.style.backgroundColor = "blue";
});

// Guardar función callback en variable para agregar como segundo parámetro de addEventListener
// EventObject de un evento
const onClickCallback = (event) => {
  text1.textContent = "Acabas de hacer clic en mí";
  console.log(
    `El evento fue ejecutado en las coordenadas (${event.x}, ${event.y})`
  );
};

text1.addEventListener("click", onClickCallback);

// removeEventListener
const button1 = document.getElementById("button1");
let clicks = 0;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const onClickCallback2 = () => {
  clicks++;
  if (clicks <= 3) {
    button1.style.backgroundColor = getRandomColor();
  } else {
    removeEventListener("click", onClickCallback2);
  }
};

button1.addEventListener("click", onClickCallback2);

// setTimeout
const button2 = document.getElementById("button2");
button2.addEventListener("click", () => {
  setTimeout(() => {
    alert("El botón 2 fue pulsado hace 5 segundos");
  }, 5000);
});

// preventDefault en un formulario
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (event) => {
  const input = myForm.elements["name"];

  if (input.value === "") {
    event.preventDefault();
    alert("El input está vacío");
  }
});

// Propiedad elements de un formulario
const button3 = document.getElementById("button3");
button3.addEventListener("click", () => {
  [...myForm.elements].forEach((element) => {
    if (element.type !== "submit") {
      console.log(`Campo: ${element.id}, Valor: ${element.value}`);
    }
  });
});

// Agregar eventos de forma dinámica con foreach
const container = document.getElementById("container");
const buttons = container.getElementsByTagName("button");

const onClickCallback3 = (event) => {
  console.log(event.target.textContent);
};

[...buttons].forEach((button) => {
  button.addEventListener("click", onClickCallback3);
});

// Agregar un solo evento en un elemento padre para modificar a sus elementos hijos
container.addEventListener("click", (event) => {
  event.target.closest("button").textContent = "Nuevo texto para el botón";
});
