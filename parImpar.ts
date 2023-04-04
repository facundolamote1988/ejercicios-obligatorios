/*Realizar un algoritmo que dado un numero entero ingresado por el usuario,
imprima en pantalla si es par o impar.
En el caso de ingresar cero,se debe volver a pedir el numero por teclado
(hasta que se ingrese un numero mayor a cero).*/


import * as rls from "readline-sync";
let num: number = 0;
//let numUser: number = rls.questionInt("ingrese un numero a verificar: ");

    while(num <= 0) {
         num =rls.questionInt("ingrese un numero mayor que cero: ");
         }

         if (num % 2 === 0){
        console.log("su numero es par");
        } else{
            console.log("el numero es impar");
        }
         