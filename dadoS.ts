/*•                     JUEGO DE DADOS

Al tirar un dado tenemos 1/6 de probabilidades de sacar 6
• Si tiramos dos dados tenemos 1/36 probabilidades de sacar doble 6                         
• Al aumentar el número de dados la probabilidad de sacar todos 6 es cada vez menor         ***PAG. 39
• Escriba un programa que calcule la probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato ingresado por el usuario)*/                             

import * as rls from "readline-sync";

let cantDados: number = 0;
let lados: number = 0;
let probabilidad: number = 0;
let probabilidad2: number = 0; 

console.log("SIMPLEMENTE DADOS")
console.log("Calculemos la probabilidad de que salga 6 en todos los dados.");
cantDados = rls.questionInt("Indique cantidad de dados: ");
lados = (6**cantDados);
probabilidad = (1 / lados)
console.log(`con ${cantDados} dados`);
console.log(`tenes un ${probabilidad} de probabilidad de que salga 6 en todos.`);
console.log("Gracias por jugar..");

