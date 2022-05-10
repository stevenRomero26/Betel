//onload


document.getElementById("ckikyn").onload = function () {
  alerta();
};
function alerta() {
  alert("cargando imagen");
}

//onkeyup
let x = (document.getElementById("Up").onkeyup = function () {
  keup();
});

function keup() {
  x = document.getElementById("Up");
  x.value = x.value.toUpperCase();
}

//onekeypress

document.getElementById("t").onkeypress = function () {
  tecladoenter();
};

function tecladoenter() {
  alert("Usted Acaba de presionar una tecla dentro de la caja de texto ");
}

//onkeydown
document.getElementById("teclado").onkeydown = function () {
  tecladopres();
};

function tecladopres() {
  document.getElementById("teclado").style.backgroundColor =
    "rgba(39, 92, 102, 0.471)";
}

//ondblclick

document.getElementById("boton").ondblclick = function () {
  dobleclick();
};

function dobleclick() {
  document.getElementById("boton").style.backgroundColor = "rgb(12, 63, 234)";
}

//onclick

document.getElementById("demo").onclick = function () {
  czmbiaColor();
};

function czmbiaColor() {
  document.getElementById("demo").style.color = "rgba(6, 10, 231, 0.668)";
}
//onchange

document.getElementById("Seleccion").onchange = function () {
  myFunction();
};
function myFunction() {
  var e = document.getElementById("Seleccion").value;
  document.getElementById("example").innerHTML =
    "Usted acaba de Seleccionar: " + e;
}

// onfocus

document.getElementById("input").onfocus = function () {
  limpiar(this);
  
function limpiar(nombre) {
    nombre.value = "";
  }

  //onblur
};
document.getElementById("input").onblur = function () {
  alert("porfavor digite un nombre");
};
