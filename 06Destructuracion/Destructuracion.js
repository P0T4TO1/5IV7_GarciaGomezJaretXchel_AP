/**
 * ejempplo de destructuracion
 */

//tebnemos el siguiemte arreflo
const arregloOrdenadoMayorMenor = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(`arregloOrdenadoMayorMenor: ${arregloOrdenadoMayorMenor}`);

//supongamosque se usara varuias veces la pruimera
//posicion que consiste en el valor mas
//grande del arreglo es conveninete destructurarlo para
// tener un nombre mas significativo

const [valorMasGrande] = arregloOrdenadoMayorMenor;
console.log(`valorMasGrande: ${valorMasGrande}`);

//Podemos obtener tanatas variables como deseemos
//con el patron rest ue indica ...nombrte de la variable podemos asignar el resto de los valores
const [valorMasGrande1, valorMasGrande2, valorMasGrande3, ...restoDeValores] =
    arregloOrdenadoMayorMenor;
console.log(
    `valorMasGrande1, valorMasGrande2, valorMasGrande3,  ...restoDeValores: ${valorMasGrande}, ${valorMasGrande2}, ${valorMasGrande3}, ${restoDeValores},`
);

const resultadoDeBusqueda = {
    resultados: [
        "resultado 1",
        "resultado 2",
        "resultado 3",
        "resultado 4",
        "resultado 5",
        "resultado 6",
        "resultado 7",
    ],
    total: 7,
    mejorCoincidencia: "resultado 3",
};

console.log(`resultadoDeBusqueda: ${resultadoDeBusqueda}`);

//supongamos que solo nos interesa la mejor coincidencia
//con ello podemos destructurar un objeto de la sigueinte manera

const { mejorCoincidencia } = resultadoDeBusqueda;
console.log(`mejorCoincidencia: ${mejorCoincidencia}`);

const { mejorCoincidencia: nuevoNombre } = resultadoDeBusqueda;
console.log(`nuevoNombre: ${nuevoNombre}`);

//otro uso util de la destructuracion es uqe podemos crear copias
//tanto de objetos y arreglos

const copiaDelResultadoDeBusqueda = { ...resultadoDeBusqueda };
console.log(`copiaDelResultadoDeBusqueda: ${copiaDelResultadoDeBusqueda}`);

const copiaDelArregloOrdenado = [...arregloOrdenadoMayorMenor];
console.log(`copiaDelArregloOrdenado: ${copiaDelArregloOrdenado}`);

//agregar informacion

const copiaDelResultadoDeBusquedaModificada = {
    ...resultadoDeBusqueda,
    cadenaBuscada: "resultado 3",
};
console.log(
    `copiaDelResultadoDeBusquedaModificada: ${copiaDelResultadoDeBusquedaModificada}`
);

const copiaDelArregloOrdenadoConNuevoMayor = [11, ...arregloOrdenadoMayorMenor];
console.log(
    `copiaDelArregloOrdenadoConNuevoMayor: ${copiaDelArregloOrdenadoConNuevoMayor}`
);
