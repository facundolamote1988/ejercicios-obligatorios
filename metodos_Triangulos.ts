// METODOS - AREA TRIANGULO

/*Realice un programa que devuelva el area del triangulo usando los siguientes pares 
de base-altura:
* (1,2) (2,4) (3,6) (4,8) (5,10) (6,12) (7,14)
Implemente un metodo llamado calcularAreaTriangulo
que reciba dos numeors por parametros (uno llamado base y el otro altura).*/

import * as rls from "readline-sync";
//let altura: number 
//let linea: string 
//let result: number 
//let base: number
function calcularAreaTriangulo(base: number, altura: number): number {
    return (base * altura) / 2
}


function calculandoTriangulos() {
    
    let resultado: number = calcularAreaTriangulo(1, 2);
    console.log(`El Area es = ${resultado}`);
    resultado = calcularAreaTriangulo(2, 4);
    console.log("El area es: ", resultado);
    resultado=calcularAreaTriangulo(4,8);
    console.log("el area es = ",resultado);
    resultado=calcularAreaTriangulo(5,10);
    console.log("el area es = ",resultado);
    resultado=calcularAreaTriangulo(6,12);
    console.log("el area es = ",resultado);
    resultado=calcularAreaTriangulo(7,14);
    console.log("el area es = ",resultado);
    
}   
calculandoTriangulos();
