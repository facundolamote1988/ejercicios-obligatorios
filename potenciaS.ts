/*                      POTENCIAS    

Realice un programa que devuelva la potencia de un numero.
La base y el exponente deben ser ingresados por teclado.                    ***PAG. 35
Solo deben admitirse exponentes mayores o iguales a cero.
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la logica de calcular la potencia utilizando metodos.*/

import * as rls from "readline-sync";

let base = rls.questionInt("Ingrese numero base: ");
let exponente = rls.questionInt("Ingrese exponente: ");
let result = Math.pow(base,exponente);

function potenciaDeUnNumero (){
    if(base ** exponente) {
       console.log(`el resultado de ${base} con exponente ${exponente} es: ${result}`)
}  
}
potenciaDeUnNumero();
