            //DECLARACION DE FUNCIONES
//CONTINUACION 3 FORMAS DE DECLARAR FUNCIONES

function otraFuncion (){
    console.log("hola estoy en la primer funcion");
}
let miFuncion = function (){
    console.log("hola estoy en la segunda funcion");

}
let arrowFunction = () => {
    console.log("hola soy la ultima funcion");
    
}
        //SE EJECUTAN FUNCIONES DECLARADAS ANTERIORMENTE

otraFuncion();
miFuncion();
arrowFunction();

            //DIBUJAR GUIONES
//let pruebas: number = 12;
//let pruebas2: number = 6;
let linea: string
function dibujarGuiones(){
    linea = "-";
    for(let i = 1; i <= 50; i++){
        linea = linea + "-";
    }
    console.log(linea);
}
dibujarGuiones();
