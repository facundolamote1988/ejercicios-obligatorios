//import { textChangeRangeIsUnchanged } from "typescript";

//Definir un metodo que evalue una cadena de caracteres de deerecha a izquierda 
function revertir(texto: string): string{
    return texto.split("").reverse().join("");
}
//Declaro variables para evaluar los metodos
const texto1: string = "hola";
const texto2: string = "mundo";
const texto3: string = "argentina campeon";
const texto4: string = "anita lava la tina";

console.log(revertir(texto1)); //Deberia imprimir "aloh"
        
        //Para quitar los espacios en blanco de una cadena de String
let texto5: string = "ANÍTA LAVA LA TINA con pinguinos";
const textoSinEspacios = texto5.replace(/\s/g,"");
console.log("el texto sin espacios seria: ",textoSinEspacios);

const textoMinuscula = textoSinEspacios.toLowerCase(); //*TolowerCase - combierte toda la cadena de texto en minusculas
console.log(`todo en minuscula seria: ${textoMinuscula}`);

console.log("texto Original: ",texto5);
console.log("texto sin espacios: ",textoSinEspacios);
console.log("texto sin espacios y en minuscula: ",textoMinuscula);

//Para reemplazar caracteres especiles

const textoSinCaracteresEspeciales = textoMinuscula
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u');

console.log("textoOriginal: ", texto5);
console.log("texto sin tilde: ", textoSinCaracteresEspeciales);

// Ahora vamos a invertir la cadena de texto

function revertirTexto(cadenaDeTexto: string): string {
    return cadenaDeTexto.split("").reverse().join("");
}
const textoInvertido = revertirTexto(textoSinCaracteresEspeciales);
console.log("texto invertido: ", textoInvertido); //Se puede consolog la variable
console.log("texto invertido: ", revertirTexto(textoSinCaracteresEspeciales)); //Se puede consolog la funcion directamente

        //Verificamos si es Palindromo o no. Se declara nueva variable para comparar:
const verificarPalindromo = textoSinCaracteresEspeciales === textoInvertido;
console.log("Verificar si el texto es un palindromo: ",verificarPalindromo);
 
if(verificarPalindromo){
    console.log(`el texto introducido ${texto5}, es un palindromo.`);
} else {
    console.log(`el texto introducido ${texto5}, no es palindromo.`);
    
}

