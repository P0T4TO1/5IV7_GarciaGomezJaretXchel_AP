/**
 * vamos a crearr una plantilla de clases para figuras geometricas
 */

class figuraGeometrica {
    //constructor
    constructor() {
        //puede o no tener implementacion
    }
    //metodos
    area() {
        //meotoodo para calcular el area
    }
    perimetro() {
        //metodo para calculra el peirmetro
        console.log("Este metodo calcula el prerimetro de una figura");
    }
}

//aploicamos herencia en la clase

class Rectangulo extends figuraGeometrica {
    constructor(base, altura) {
        //hacemos el constructor del padre
        super();
        this._base = base;
        this._altura = altura;
        this._area = null;
        this._perimetro = null;
        this._actualizarArea = false;
        this._actualizarPerimetro = false;
    }

    //metodo de calcular area
    calcularArea() {
        return this._base * this._altura;
    }

    calcularPerimetro() {
        return (this._base + this._altura) * 2;
    }

    //hay que crear los setters para llamar
    //a la modificacion de los atributos

    set base(base) {
        this._base = base;
        //si cambia la base tenemos que actualizar el area y el perimetro
        this._actualizarArea = true;
        this._actualizarPerimetro = true;
    }

    set altura(altura) {
        this._altura = altura;
        //si cambia la base tenemos que actualizar el area y el perimetro
        this._actualizarArea = true;
        this._actualizarPerimetro = true;
    }

    //ahora los get

    get area() {
        if (this._actualizarArea || !this._area) {
            this._area = this.calcularArea();
        }
        return this._area;
    }

    get perimetro() {
        if (this._actualizarPerimetro || !this._perimetro) {
            this._perimetro = this.calcularPerimetro();
        }
        return this._perimetro;
    }
}

//creamos un objeto de la clase

const objetoRectangulo = new Rectangulo(2, 5);
//salida
console.log(objetoRectangulo.area);
//si cambio un elemento
objetoRectangulo.base = 5;
//salida
console.log(objetoRectangulo.area);
