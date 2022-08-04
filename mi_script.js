document.addEventListener('DOMContentLoaded', function () {
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :
let info = document.getElementById("info");
let  enlaces = document.getElementsByTagName("a");

let cantEnlaces = enlaces.length;
info.append("Cantidad de Enlaces: "+ cantEnlaces);
    // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :
let penultimoEnlace= enlaces[cantEnlaces-2].href;
info.innerHTML = info.innerHTML + "<br>" +"Este es el penultimo enlace" + penultimoEnlace;
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :
let cont = 0
for(let i = 0; i <cantEnlaces; i++) {
    if(enlaces[i]=="http://prueba/") {
        cont++
    }
}

info.innerHTML = info.innerHTML + "<br>" + "Cantidad de Enlaces que apuntan a PRUEBA: " + cont;
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :
let cantP = document.getElementsByTagName("p");
let tercerP = cantP[2].getElementsByTagName("a");
info.innerHTML = info.innerHTML + "<br>" + "Numero enlaces 3er parrafo: " + tercerP.length;

});
