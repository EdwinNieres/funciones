// COLOREA LAS CAJAS A NEGRO HACIENDO CLICK

const uno = document.getElementById("one");
const dos = document.getElementById("two");
const tres = document.getElementById("three");
const cuatro = document.getElementById("four");
const caja = document.getElementById("key");

const colorear = (caja) => (caja.style.backgroundColor = "black");
uno.addEventListener("click", () => colorear(uno));
dos.addEventListener("click", () => colorear(dos));
tres.addEventListener("click", () => colorear(tres));
cuatro.addEventListener("click", () => colorear(cuatro));

// CREANDO NUEVO DIV Y CAMBIANDO COLORES CON TECLAS

function nuevo(caja) {
  const creacion = document.createElement("div");
  creacion.style.width = "200px";
  creacion.style.height = "200px";
  creacion.style.margin = "4px";
  creacion.style.backgroundColor = caja;
  document.body.appendChild(creacion);
}

document.addEventListener("keydown", function (cambio) {
  if (cambio.key === "a") {
    caja.style.backgroundColor = "pink";
  } else if (cambio.key === "s") {
    caja.style.backgroundColor = "orange";
  } else if (cambio.key === "d") {
    caja.style.backgroundColor = "skyblue";
  } else if (cambio.key === "q") {
    nuevo("purple");
  } else if (cambio.key === "w") {
    nuevo("grey");
  } else if (cambio.key === "e") {
    nuevo("brown");
  }
});
