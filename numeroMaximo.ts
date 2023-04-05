/* Leer valores hasta que se introduzca un cero (0)
El usuario puede introducir valores positivos y negativos   ***PAG. 35
Encontrar el máximo de los elementos que se introdujeron
Analizar cómo cambia el programa para hallar el mínimo*/

import * as rls from "readline-sync";

let num: number = 1
let max: number = 0;

while(num != 0){
   // console.log("ingrese otro numero: ");
    num = rls.questionInt("ingrese otro numero: ");
    if(num > max)
        max = num
    if (num === 0)
        console.log(`el numero maximo es: ${max}`);
} 
  
    