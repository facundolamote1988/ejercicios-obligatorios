import * as rls from "readline-sync";

let base: number= rls.questionInt("Ingrese base:");
let exponente: number = rls.questionInt("Ingrese exponente !=0:");
let resultado = Math.pow(base, exponente)

function potenciaDeUnNumero (){
      for(let r= 0; r <= 0; r++) {
         console.log(base, "^", exponente, "=", resultado)
      }
     }
potenciaDeUnNumero();
