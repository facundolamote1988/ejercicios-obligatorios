/* Desarrolle un programa que pida alusuario dos numeros enteros, y luego retorne 
la suma de todos los numeros que estan entre ellos.
Por ejemplo si los numeros son 2 y 7, debe entregar como resultado 2 + 3 + 4 +
5 + 6 + 7 = 27.
Si el primer numero es mayor que el segundo, deben garantizar que el algoritmo
funciona correctamente de todos modos.*/

import * as rls from "readline-sync";
const num1: number = rls.questionInt("ingrese el primer numero entero: ");
const num2: number = rls.questionInt("ingrese el segundo numero entero: ");
let result: number = 0;

//reducer
for(let i: number = num1; i <= num2; i++) {
result = result + i;
}
console.log(result);
