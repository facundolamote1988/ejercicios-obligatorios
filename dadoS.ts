/*•                     JUEGO DE DADOS

Al tirar un dado tenemos 1/6 de probabilidades de sacar 6
• Si tiramos dos dados tenemos 1/36 probabilidades de sacar doble 6                         
• Al aumentar el número de dados la probabilidad de sacar todos 6 es cada vez menor         ***PAG. 39
• Escriba un programa que calcule la probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato ingresado por el usuario)*/                             

import * as rls from "readline-sync";

let dados = rls.questionInt("Ingrese cantidad de dados: ");
let result: number = 0;
let casosPosibles = Math.pow(6,dados);
let casosFavorables = 1;

result = casosFavorables/casosPosibles;
console.log(`la probabilidad de que salga 6 en todas las caras con ${dados} dados es de: ${result}`);
