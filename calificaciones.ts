/*Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%                                      ***PAG. 38
• la parte teórica el 40%

Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía

Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)*/

import * as rls from "readline-sync";

let alumno: string = "";
let notePractica: number = 0;
let noteProblem: number = 0;
let noteTeoria: number = 0;
//let salir: number = 1
let suma: number = 1
let totalPractica: number = 0;
let totalProblem: number = 0;
let totalTeoria: number =  0;
let promedioGral: number =0; 
let sumaPractica: number = 0;
let sumaProblem: number = 0;
let sumaTeoria: number = 0;
      
        console.log("INGRESAR DATOS DEL ALUMNO, PARA FINALIZAR PRESIONE 1");
            
for(let salir: number = 1; salir <= 1 ; salir++){
    alumno = rls.question("ingrese nombre del alumno: ");
    notePractica = rls.questionFloat("nota en practica: ");
    noteProblem = rls.questionFloat("nota en problemas: ");
    noteTeoria= rls.questionFloat("nota en teoria: ");

    //if(salir == 1){
        totalPractica = (notePractica * 0.1);
        totalProblem = (noteProblem * 0.5);
        totalTeoria = (noteTeoria * 0.4);
        sumaPractica = (totalPractica + notePractica);
        sumaProblem = (totalProblem + noteProblem);
        sumaTeoria = (totalTeoria + noteTeoria);
        suma = (sumaPractica + sumaProblem + sumaTeoria);
       promedioGral = (suma / 3);

    console.log(`el alumno ${alumno}, tiene un promedio general de ${promedioGral}`);
    console.log(`su nota final en practica es: ${sumaPractica}`);
    console.log(`su nota final en problemas es: ${sumaProblem}`);
    console.log(`su nota final en teoria es: ${sumaTeoria}`);

    console.log(`FIN DE LA CALIFICACION DEL ALUMNO: ${alumno}`);
    

    



}


