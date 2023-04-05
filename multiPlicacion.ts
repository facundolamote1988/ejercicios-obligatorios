/*Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario.
Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/

import * as rls from "readline-sync";

let tabla1: number = rls.questionInt("ingrese numero para la multiplicar: ");
let tabla2: number = rls.questionInt("ingrese hasta que numero quiere multiplicar: ");

for(let i: number = 1; i <= tabla2; i++){
    let result: number = tabla1 * i;
    console.log(`${tabla1} x ${i} = ${result}`);
    
    
}