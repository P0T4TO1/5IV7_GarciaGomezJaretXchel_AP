//ejemplo de uso de bucles

const razasDePerros = [
    "Gran Danes",
    "Dogo de Burdeos",
    "Dogo de Argentino",
    "San Bernando",
    "Mastin del Pirineo",
    "Mastin Español",
    "Chihuahua",
    "Pastor Aleman",
    "Lobero Irlandes",
    "Pitbull",
];

/**
 * Para esta nueva version de JS, se agrego el bucle
 * for/of que permite iterar sobre los elementos de
 * objetos iterables
 */

//primero con un for tradicional
for (let indice = 0; indice < razasDePerros.length; indice++) {
    console.log(razasDePerros[indice]);
}

//ahora con un for/of
for (const raza of razasDePerros) {
    console.log(raza);
}

/*
tambien existe un bucle for/in que itera sobre las 
llaves del objeto en el caso de un arreglo, estas llaves
son los indices
*/

//ahi le ponene rallotas

for (const indice in razasDePerros) {
    console.log(razasDePerros[indice]);
}
