/*
Una funcion flehca es una funcion JS, que a diferencia de 
una normal, no genera su propio contexto (this), necesita ser
declarada antes de ser usada, y no necesitan
usar "return" o llaves para instrucciones de una sola linea

Ejemplo
Hagamos una funcion simple que devuelva la suma de
dos numeros
*/

function sumaFuncionNormal(n1, n2) {
    return n1 + n2;
}

console.log(`sumaFuncionNormal(3, 4): ${sumaFuncionNormal(3, 4)}`);

//este es su equivalente como funcion flecha

const sumaFuncionFlecha = (n1, n2) => n1 + n2;

console.log(`sumaFuncionFlecha(4, 5): ${sumaFuncionFlecha(4, 5)}`);

//otra forma de la funcion flecha

const sumaFuncionFlecha1 = (n1, n2) => {
    return n1 + n2;
};

console.log(`sumaFuncionFlecha1(5, 6): ${sumaFuncionFlecha1(5, 6)}`);

/*
si queremos devolver un objeto en una sola linea 
con una funcion flecha debemos envolverlo
primero entre parentesis
*/

const sumaFuncionFlecha2 = (n1, n2) => ({
    resultado: n1 + n2,
});

console.log(`sumaFuncionFlecha2(6, 7): ${sumaFuncionFlecha2(6, 7)}`);

/* 
Cuando la funcion flecha tiene un solo parametro,
no es necesario envolverlo entre parentesis
*/

const cuadradoFuncionFlecha = (n1) => n1 ** 2;

console.log(`cuadradoFuncionFlecha(7): ${cuadradoFuncionFlecha(7)}`);
