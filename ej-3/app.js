// Ejercicio 3
// Haga una función que reciba un arreglo y un número. 
// Tenemos que sumarle dicho número a cada elemento 
// del arreglo y devolver el arreglo modificado.

function sumNumToAllElements(arr, num){
    for(let i=0; i<arr.length; i++){
        arr[i] += num;
    }
}