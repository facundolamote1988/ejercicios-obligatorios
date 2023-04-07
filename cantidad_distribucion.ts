            /*Cantidad y Distribución de Positivos.
Leer valores del usuario hasta que introduzca un 0
El usuario puede introducir valores numéricos, tanto            ***PAG. 36
positivos como negativos.
Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total*/

import * as rls from "readline-sync";
let negative: number = 0;
let positive: number = 0;
let suma: number = 0;
let promedio: number = 0;
let numUser = 1;

while(numUser != 0){
    numUser = rls.questionInt("ingrese numero: ");
   if(numUser > positive && numUser != 0){
        positive = positive + 1;
    }if(numUser < negative && numUser != 0){
}        negative = negative +1; 
    if(numUser == 0){
        suma = positive + negative;
        promedio = (positive * 100) / suma;
        console.log(`${positive} son mayores a 0, y el ${promedio} % son positivos`);
    }

}