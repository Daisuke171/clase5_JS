// Ejercicio 2
// Haga una función que solo reciba arreglos con más de 
// 5 elementos y luego elimine los últimos 3. 
// En caso de recibir un arreglo de menos de 5 elementos, 
// mostrar en pantalla un mensaje de error.

function removeTheThreeLastElements(arr){
    if(arr.length<5){
        console.log("ERROR: THE ARRAY IS LESS THAN 5")
    }
    else{
        for(let i=1; i<=3; i++){
            arr.pop();
        }
    }
}