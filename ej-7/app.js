// Ejercicio 7
// Dado un arreglo de números enteros, encuentre el mayor producto posible 
// entre dos números adyacentes y devuelva el valor de dicho producto.

// adjacentElementsProduct([9,5,10,2,24,-1])  # return (50)
// # 5 * 10 = 50

function adjacentElementsProduct(arr){
    const PRODUCTS = [];

    for(let i=0; i<arr.length-1; i++){
        PRODUCTS[i] = arr.at(i) * arr.at(i+1);
    }

    return Math.max(...PRODUCTS)
}

const NUMS = [9,5,10,2,24,-1];
const maxProduct = adjacentElementsProduct(NUMS);
console.log(maxProduct);