/*Crear algoritmo que vizualice losnumeros que son multiplos de 2 o de 3
que hay entre el 1 y el 100
Tener en cuenta que hay numeros que son multiplos de 2 y de 3 al mismo tiempo.
En dichos casos, solamente indique el numero una sola vez*/


//let result: string = "";
for(let i: number = 1; i <= 100; i++){
    if(i % 2 === 0 ||i % 3 === 0) {
     console.log(i);
     
        // result = result + i + " ";
    }
}
//onsole.log(result);
