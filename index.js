var boton = document.querySelectorAll("button")[0];
var boton2 = document.querySelectorAll("button")[1];
var boton3 = document.querySelectorAll("button")[2];

var textA1=document.querySelectorAll("textarea")[0];
var textA2=document.querySelectorAll("textarea")[1];



boton.onclick=mostrar1
boton2.onclick=mostrar2
boton3.onclick=mostrar3
function mostrar1(){
    if(textA1.value.trim()!=""){
      encriptar();
    }else{
     alert("llena los espacions")   
    }
}
function mostrar2(){
    alert("ingrsaste a btn2")
 }
 function mostrar3(){
    alert("ingrsaste a btn3")
 }




function encriptar(){
    var nu=""
   for (let x = 0; x < textA1.length; x++) {
    if(textA1[i]=="a"){
        textA1[i]="ai"
    }
    if(textA1[i]=="e"){
        textA1[i]="enter"
    }
    if(textA1[i]=="i"){
        textA1[i]="imes"
    }
    if(textA1[i]=="o"){
        textA1[i]="ober"

    }
    if(textA1[i]=="u"){
        textA1[i]="ufat"  
    }
     nu =textA1+nu
   }
   textA2.value=nu
}
function limpiar(){
    textA1.value=""

}
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/