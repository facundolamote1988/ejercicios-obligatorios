  
/*              PROMEDIO - MAXIMO - MINIMO                           ***PAG. 37
• Diseñar un algoritmo que lea números enteros hasta teclear 0          
• Determinar y mostrar el máximo, el mínimo y la media de todos los números ingresados
• Pensar cuidadosamente cómo debemos inicializar las variables*/

import * as rls from "readline-sync";

let maX: number = 0;
let miN: number = 0;
let counter:number = 2;
let suma: number = 0;
let media: number = 0;

let n1: number = rls.questionInt("ingrese un numero: ");

if(n1 != 0){
        suma = n1;
        let n2: number = rls.questionInt("ingrese un numero: ");
if(n2 != 0)
        suma += n2;
        media = suma / 2;

        if(n1 > n2){
                maX = n1;
                miN = n2;
        }
        else{
                maX = n2;
                miN = n1;
        }
        let nn: number = 1;
       
        while(nn != 0){
                nn = rls.questionInt("ingrese un numero:");
                
                if(maX < nn && nn != 0)
                        maX = nn;
                if(miN > nn && nn != 0)
                        miN = nn;
                if(nn != 0){
                        suma += nn;
                        counter += 1;
                        media = suma/counter;
        }
}
console.log(`el numero maximo es ${maX} el minimo es ${miN} y la media es ${media}`);
 } else
         console.log(`${n1} es el maximo ${n1} es el minimo ${n1} es el promedio`);
        

  

