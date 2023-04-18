"use strict";
/*                                    DIVISORES
Implemente un metodo llamado cantidadDeDivisores que reciba
un numero entero y devuelva la cantidad de divisores.                   ***PAG. 37
Por ejemplo, para el numero 16, sus divisores son, 1,2,4,8,16,
por lo que la respuesta deberia ser 5.
RE-UTILICE el metodo esMultiplo implementado para
el ejercicio anterior.*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero = rls.questionInt("INGRESE UN NUMERO: ");
function cantidadDeDivisores(numero) {
    var result = 0;
    for (var i = 1; i <= numero; i++) {
        if (numero % i === 0)
            result++;
    }
    return result;
}
var result = cantidadDeDivisores(numero);
console.log("el numero ".concat(numero, " tiene ").concat(result, " divisores."));
