/*
manejo de variables en JS ES6

las variables ahora como bloques

var
let
const

*/

if (true) {
    //se declara por primera vez x
    //var x = "x";
    let x = "x";
    //se imprime el valor de la variable x
    //este contendra el caracter
    console.log(x);
}

/*
la variable x, sigue existiendo y conserva su valor
*/

/*
la variable x, ya no existe, ya que ´pertenece al 
nloque delimitado por las llaves del if
por lo que la siguient elinea provoca un error
ReferenceError
*/

console.log(x);

//la variable x se redeclara con el valor "y"

//var x = "y";
//const x = "y";
var x = "y";

//la variable x ahora vale "y"
/*
como el tipo de variable de x es constante la siguiente
linea de codigo provoca un error
TypeError, para el comportamiento deseado, por lo tanto
el tipo de variable deberia de ser LET
*/
console.log(x);

x = "z";

//ahora la variable vale "Z"
console.log(x);
