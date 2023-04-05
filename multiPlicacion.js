"use strict";
/*Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario.
Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var tabla1 = rls.questionInt("ingrese numero para la multiplicar: ");
var tabla2 = rls.questionInt("ingrese hasta que numero quiere multiplicar: ");
for (var i = 1; i <= tabla2; i++) {
    var result = tabla1 * i;
    console.log("".concat(tabla1, " x ").concat(i, " = ").concat(result));
}
