"use strict";
/* Leer valores hasta que se introduzca un cero (0)
El usuario puede introducir valores positivos y negativos
Encontrar el máximo de los elementos que se introdujeron
Analizar cómo cambia el programa para hallar el mínimo*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num = 1;
var max = 0;
while (num != 0) {
    // console.log("ingrese otro numero: ");
    num = rls.questionInt("ingrese otro numero: ");
    if (num > max)
        max = num;
    if (num === 0)
        console.log("el numero maximo es: ".concat(max));
}
