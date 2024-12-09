let contadorCar = document.getElementById("contador");
let textArea = document.getElementById("textArea");

contadorCar.innerText = 0;

textArea.addEventListener("input", function() {
    cantidadCaracteres(contadorCar, textArea);
});

function cantidadCaracteres(contadorCar, textArea){
    contadorCar.innerText = textArea.value.length;
}