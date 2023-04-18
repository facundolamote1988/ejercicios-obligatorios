"use strict";
/*                      POTENCIAS

Realice un programa que devuelva la potencia de un numero.
La base y el exponente deben ser ingresados por teclado.                    ***PAG. 35
Solo deben admitirse exponentes mayores o iguales a cero.
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la logica de calcular la potencia utilizando metodos.*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese numero base: ");
var exponente = rls.questionInt("Ingrese exponente: ");
var result = Math.pow(base, exponente);
function potenciaDeUnNumero() {
    if (Math.pow(base, exponente)) {
        console.log("el resultado de ".concat(base, " con exponente ").concat(exponente, " es: ").concat(result));
    }
}
potenciaDeUnNumero();
