// Ejercicio 4
// Haga una función que reciba un número y devuelva un 
// arreglo que tenga el tamaño del número recibido.
// El contenido del arreglo deben ser números desde el 1 hasta el número recibido. (1 a n)

function arrayMaker(arr, size){
    for(let i=0; i<size; i++){
        arr.push(i+1);
    }
}