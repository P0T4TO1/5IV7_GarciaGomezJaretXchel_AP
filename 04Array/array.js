/**
 * Array
 *
 * ForEach itera sobre los elementos del arreglo
 * NO REGRESA NADA
 * En la siguiente linea de codigo, hace lo mismo
 * que un bucle; pero itera sobre todos los elementos
 * del arreglo, cada que lo hace ejecuta una funcion
 * su indice y el arreglo original
 */
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

razasDePerros.forEach((raza, indice, arregloOriginal) => console.log(raza));

//en caso de que no utilicemos alguno de los
//parametros, lo podemos omitir, por ejemplo

razasDePerros.forEach((raza) => console.log(raza));

/**
 * Funcion map
 * Itera sobre los elementos del arreglo, regresa un
 * arreglo diferente con el que nos muestra 
 originalmente :3 T_T
 */

const razasDePerrosEnMayusculas = razasDePerros.map(
    (raza, indice, arregloOriginal) => raza.toUpperCase()
);

/**
 * Hay otras funciones utiles como por ejemplo
 *
 * find
 *
 * nos pemite buscar un elemento dentro del arreglo
 * si lo encuentra, lo regresa, y siuno lanza 'undefined'
 * por ejemplo "chihuahua"
 */

if (
    razasDePerros.find((raza, indice, arregloOriginal) => raza === "Chihuahua")
) {
    console.log("La raza se encuentra en el arreglo");
} else {
    //hay que meterlo
    razasDePerros.push("Chihuahua");
    console.log("Se agrego la raza");
}

/**
 * findIndex
 * es similar, pero en lugar de regresar el elemento,
 * devuelve su indice, sino lo encuentra, devuelve
 * -1, esta funcion es particularmente util si tenemos que
 * modificar el elemento original dentro
 * del arreglo
 */

const indiceDeChihuahua = razasDePerros.findIndex(
    (raza, indice, arregloOriginal) => raza === "chihuahua"
);
if (indiceDeChihuahua > -1) {
    //resultado esperado porque si esta
    console.log(razasDePerros[indiceDeChihuahua]);
    razasDePerros[indiceDeChihuahua] += "(Raza de perro pequeña)";
    //resultado esperado
    //chihuahua (Raza de perros pequeña)
    console.log(razasDePerros[indiceDeChihuahua]);
}
