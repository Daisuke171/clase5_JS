// Ejercicio 6
// Dado un arreglo de números enteros, encuentre y devuelva 
// el valor de la menor suma posible entre ellos.

// minSum([7,4,2,3])  # return (5)

function minSum(arr){
    const SUMS = [];

    for(let i=0; i<arr.length-1; i++){ // for each set so it can sum all combinations, but the last one because it can be added to anymore values
        SUMS[i] = arr.at(i) + arr.at(i+1); /// stores the sum of the two values
    }
    
    return Math.min(...SUMS);
}