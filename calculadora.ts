/*                                              CALCULADORA
Realicw una calculadora que sume o reste segun el pedido del usuario.
el suario debera ingresar 2 numeros por teclado.                    
°lLuefo ingresara una opcion:                               ***PAG. 7
 *Si ingresa 1 los numeros se sumaran.
 *Si ingresa 2 los numeros se restaran.
 Si ingresa cualquier otra tecla se termina el programa.
 Para informar el resultado de la operacion 
 debe utilizar el siguiente formato (40 GUIONES "-").*/

import * as rls from "readline-sync";                              //REPETICION DE CODIGO.
//let i: number;                                                                         //LLAMAR UNA FUNCION
let linea: string;

let num1: number = rls.questionInt("ingrese el primer numero: ");
let num2: number = rls.questionInt("ingrese el el segundo numero: ");
let opcionMenu: number = rls.questionInt("para sumar, ingrese la opcion 1 para restar ingrese la opcion 2, presione cualquier tecla para salir. ");

linea = "-";
for (let i = 0; i <= 40; i++) {
    linea = linea + "-"
}


if (opcionMenu == 1) {
    /*linea = "-";
    */
    console.log(linea);
    console.log("el resultado de la suma es: ", num1 + num2);
    console.log(linea);
    /*linea = "-";
    for(i = 0 ;i <= 40; i++ ){
        linea = linea + "-" 
    }*/

}
if (opcionMenu == 2) {
    
    console.log(linea);
    console.log("el resultadode de la resta es: ", num1 - num2);
    console.log(linea);
 


}