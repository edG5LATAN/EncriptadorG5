var boton = document.querySelectorAll("button")[0];
var boton2 = document.querySelectorAll("button")[1];
var boton3 = document.querySelectorAll("button")[2];

let caja2=document.querySelector(".contenedor2")
let caja3=document.querySelector(".divSection02")

var textA1 = document.querySelectorAll("textarea")[0];
var textA2 = document.querySelectorAll("textarea")[1];

boton.onclick = mostrar1;
boton2.onclick = mostrar2;
boton3.onclick = mostrar3;
function mostrar1() {
  if (textA1.value.trim() != "") {
    let txt1 = textA1.value.trim();
    encriptar(txt1);
    mostrar()
  } else {
    alert("llena los espacions");
  }
}
function mostrar2() {
 
  if (textA1.value.trim() != "") {
    let txt1 = textA1.value.trim();
    desencriptar(txt1); 
  } else {
    alert("llena los espacions");
  }
}
function mostrar3() {
  copiar();
}

function encriptar(texto) {
  let text=texto.toLowerCase();
  let nuevo = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] == "a") {
      nuevo = nuevo + "ai";
    } else if (text[i] == "e") {
      nuevo = nuevo + "enter";
    } else if (text[i] == "i") {
      nuevo = nuevo + "imes";
    } else if (text[i] == "o") {
      nuevo = nuevo + "ober";
    } else if (text[i] == "u") {
      nuevo = nuevo + "ufat";
    } else {
      nuevo = nuevo + text[i];
    }
  }
  textA2.value = nuevo;
  limpiar1();
}
function desencriptar(texto) {
  let text=texto.toLowerCase();
  let nuevo = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] == "a") {
      nuevo = nuevo + "a";
      i = i + 1;
    } else if (text[i] == "e") {
      nuevo = nuevo + "e";
      i = i + 4;
    } else if (text[i] == "i") {
      nuevo = nuevo + "i";
      i = i + 3;
    } else if (text[i] == "o") {
      nuevo = nuevo + "o";
      i = i + 3;
    } else if (text[i] == "u") {
      nuevo = nuevo + "u";
      i = i + 3;
    } else {
      nuevo = nuevo + text[i];
    }
  }
  textA2.value = nuevo;
  limpiar1();
}
function copiar() {
 
  if (textA2.value.trim() != "") {
    navigator.clipboard.writeText(textA2.value);
    limpiar2();
    limpiar1();
    ocultar()
  }else{
    alert("esta vacio")
  }
}
function limpiar1() {
  textA1.value = "";
}
function limpiar2() {
  textA2.value = "";
  
}
function mostrar(){
  caja2.classList.add("ocultar")
  caja3.classList.add("mostrar")
 
}
function ocultar(){
  caja3.classList.add("ocultar")
 
}
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
