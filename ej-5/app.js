// Ejercicio 5
// Hay un arreglo con varios números donde 
// todos son iguales excepto uno. Haga una función 
// que encuentre qué número es el distinto.

// findUniq([1,1,1,1,1,2,1,1,1])  # return (2)

function findUnique(arr){
    const sorted = arr.toSorted((a, b) => a - b); /// sorts the array, so it'll be easier to spot the unique value
    if(sorted.at(0)!==sorted.at(1)){ /// if the first two values are not equal, then the first one is the unique
        return sorted.at(0);
    }
    else if(sorted.at(-1)!==sorted.at(-2)){ /// if the last two values are not equal, then the last one is the unique
        return sorted.at(-1);
    }
}

const numbers = [1,1,1,1,1,3,1,1,1];

const uniqueValue = findUnique(numbers);
console.log(uniqueValue);