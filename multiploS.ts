/*                  MULTIPLOS
Cree un metodo esMultiplo con 2 parametros que devuelva el valor 
logico VERDADERO o FALSO segun si el primer numero que se indique 
como parametro es multiplo del segundo.                                    ***PAG. 36
Recuerde que un numero es multiplo de otro si al dividirlo 
su resto es cero.
Recuerde que la operacion MOD permite saber si el resto de 
una division es cero. */

import * as rls from "readline-sync";
console.log("COMPROBAMOS MULTIPLOS");
console.log("Si es muntiplo, la respuesta sera: TRUE.");
console.log("Si no es muntiplo, la respuesta sera: FALSE.");

let num1 = rls.questionInt("Ingrese primer numero: ");
let num2 = rls.questionInt("Ingrese segundo numero: ");
const resto = esMultiplo (num1,num2);

function esMultiplo (num1: number,num2: number): boolean{
     if(num1 % num2 === 0){
        return true;
}   else{
        return false
}
}   console.log(esMultiplo(num1,num2));
