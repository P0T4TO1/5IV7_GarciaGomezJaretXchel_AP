/**
 * La siguiente funcions era utilizada como un callback
 * en caso de que la operacion se exitosa
 */

const fueExitosa = (resultado) => {
    console.log(`La operacion fue exitosa ${resultado}`);
};

//La siguiente operacion sera utilizada como callback
//en caso contrario

const fueErronea = (resultado) => {
    console.log(`La operacion fallo ${resultado}`);
};

/**
 * Una promesa recibe una funcion principal que tiene
 * dos parametros; el callback en caso de exito y
 * el callback en caso contrario
 * debe de tener un formato de request response
 */

const miPromesaSiFunciona = new Promise((salioBien, salioMal) => {
    /** En la funcion principal va codigo que no
     * se pueda completar de forma sincrona o instantanea
     * tal como peticiones a un servidor externo */
    try {
        const division = 10 / 5;
        //Como no hay nada malo con este codigo nos devolvera true
        salioBien(division);
    } catch (e) {
        salioMal(e);
    }
});

/**
 * Hay dos formas de isar los callback, pasando ambos
 * en el then o pasando solo la de exito en el then y
 * usando un catch
 *
 */

miPromesaSiFunciona.then(fueExitosa, fueErronea);

miPromesaSiFunciona.then(fueExitosa).catch(fueErronea);

//tambien se pude usar con funciones anonimas
miPromesaSiFunciona
    .then((resultado) => {
        console.log(`La operacion fue exitosa ${resultado}`);
    })
    .catch((resultado) => {
        console.log(`La operacion fallo ${resultado}`);
    });

/** Algo importante de las promesas, es recordar
 * que son asincronas, quiere decir, que no se ejecutasn de
 * forma inmediata, si no que una vez que termina su ejecuion
 * con then determina que hacer.
 */

//para una funcuion flecha
const unaFuncionFlechaAsincrona = async () => {
    const resultadoDeLaPromesa = await miPromesaSiFunciona.then((resultado) => {
        console.log(`La operacion fue exitosa ${resultado}`);
        return resultado;
    });

    //La variable resultadoPromesa contiene el valor
    // del resultado que esta en el retun, pero solo
    // porque usamos awaut sino tendria una promesa y no podira hacer uso del resultado

    console.log(resultadoDeLaPromesa);
};

unaFuncionFlechaAsincrona();
