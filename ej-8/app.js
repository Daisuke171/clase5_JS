// Ejercicio 8
// Tenemos un grupo de ovejas amenazadas por un lobo 
// y necesitamos saber a cuál se está por comer.

// Consideramos que tenemos a las ovejas y al lobo en un arreglo 
// y que en ese mismo consideramos al último elemento como el primero.

// Consideración: El lobo solo puede comer a la oveja que tiene a su derecha.

// warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"])
// # "Hey! Oveja numero 1! El lobo esta cerca!"

// warnTheSheep(["sheep", "sheep", "sheep", "wolf"])
// # "No sigas comiendo ovejas!"

function warnTheSheep(arr){
    const wolfLocation = arr.findIndex((element) => element === "wolf"); //find the index of the wolf
    const sheepInDanger = (arr.length - wolfLocation) - 1; // this will give the correct position of the sheep at the right of the wolf
    if (sheepInDanger > 0 && sheepInDanger!== arr.length){
        console.log(`Hey! Oveja numero ${sheepInDanger}! El lobo esta cerca!`);
    }
    else if(sheepInDanger === 0){
        console.log("No sigas comiendo ovejas!");
    }
    else if(wolfLocation < 0){
        console.log("No hay lobo")
    }
}

const FLOCK1 = ["sheep", "sheep", "wolf", "sheep", "sheep"];
const FLOCK2 = ["wolf", "sheep", "sheep", "wolf"];

warnTheSheep(FLOCK1);
warnTheSheep(FLOCK2);