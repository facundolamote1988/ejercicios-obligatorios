/*                                    DIVISORES
Implemente un metodo llamado cantidadDeDivisores que reciba 
un numero entero y devuelva la cantidad de divisores.                   ***PAG. 37
Por ejemplo, para el numero 16, sus divisores son, 1,2,4,8,16,
por lo que la respuesta deberia ser 5.
RE-UTILICE el metodo esMultiplo implementado para
el ejercicio anterior.*/

import * as rls from "readline-sync";

let numero: number = rls.questionInt("INGRESE UN NUMERO: ");

function cantidadDeDivisores(numero: number): number {
    let result: number = 0;
    for (let i:number = 1; i <= numero; i++){
       if(numero % i === 0)
            result++;
           
    }
    return result; 
} 
let result: number = cantidadDeDivisores(numero);
console.log(`el numero ${numero} tiene ${result} divisores.`);





    
