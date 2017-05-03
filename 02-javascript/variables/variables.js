// variables.js

// En JavaScript se define
// una variable con la
// palabra reservada
// <var>

//ENTEROS

var dos = 2;
var tres = 3;
var quince = 15;
var diezYSiete = 17;
console.log(dos);
console.log(tres);
console.log(quince);
console.log(diezYSiete);

//se pueden o no poner punto y coma, pero es una
//buena practica ponerlos

//FLOAT

var dosPuntoCinco = 2.5;
console.log(dosPuntoCinco);

//TODAS LAS DEMAS

var verdaderoOFaslso = true;
var falso = false;
var nombre = "Kevin";
var negativo = -4;
var fechaNacimiento = new Date();
var cuatroString = '4';
cuatroString = 4;
cuatroString = true;
cuatroString = false;
cuatroString = -5432;
cuatroString = new Date();
cuatroString = undefined;
cuatroString = null;

console.log(cuatroString);

var variable;

console.log(variable);

var numero2 = 2;
console.log(typeof numero2);
console.log(typeof falso);


//OBJETOS JSON
//CONSEJOS: poner dos puntos y no igual
//En el console.log poner coma para imprimir todo el objeto

var kevin = {
    id:1,
    nombre: 'Kevin',
    createdAT: new Date(),
    updatedAT: new Date(),
    casado: false,
    prestamos: false,
    hijos: null,
    altura: 1.76,
    negativo: -1,
    //En los objetos se pueden guardar mas objetos
    mascota:{
        nombre: 'Grisson',
        fechaNacimiento: new Date()
    }
}
console.log('OBJETO: ',kevin);//puede ser con comillas o comillas dobles
console.log(kevin.mascota.fechaNacimiento);

//variamos la altura de diferentes formas
console.log('kevin: ',kevin.altura);

kevin.altura = 1.70;
console.log('kevin: ',kevin.altura);

kevin.altura = {
    ancho: 2.1,
    alto: 1.76
}
console.log('altura: ',kevin.altura);

kevin.altura = undefined;
console.log('objeto: ',kevin.altura );

//borrar un atributo de un objeto
delete kevin.altura;
console.log('objeto: ', kevin);

//ARREGLOS

var arreglo = [
    1,
    'Kev',
    1.8,
    false,
    true,
    null,
    undefined,
    new Date(),
    -4321,
    {
        a: 'b'
    }];
console.log("Arreglo: ",arreglo);

var nuevoObjeto = {
    papas: ['chola','chaucha','maria'],
    cebolla: ['paitena','perla','blanca']
};

var matriz = [[0,1],[2,3]];
console.log(matriz[0][0]);

var arregloDeObjetos = [
    {
        id:1,
        nombre:'Kevin'
    },
    {
        id:2,
        nombre:'Felipe'
    }
];
console.log('Antes: ',arregloDeObjetos);
//splice('El primer numero es donde se delimita la posicion en la que vamos a trabajar','El segundo numero es el numero de objetos a eliminar')
arregloDeObjetos.splice(0,1);
console.log('Despues: ',arregloDeObjetos);
//Ejemplo para sobre escribir un objeto en una posicion especifica
arregloDeObjetos.splice(0,0,{id:3, nombre:'Kev'});
console.log('Despues 2: ',arregloDeObjetos);
