/**
 * Created by USRDEL on 3/5/17.
 */

//FUNCIONES

//void

function holaMundo() {
    console.log('Hola mundo');
}
holaMundo();

//entero
//El doble de un entero

function doble(numero) {
    return numero*2;
}
console.log(doble(2));

//Multiplicacion de 2 numeros
//nunca poner var ni nada para definir un parametro dentro de los parentesis ejemplo solo poner a,b como esta a continuacion
function multiplicar2(a,b) {
    return a*b;
}
console.log(multiplicar2(4,3));

var dos = multiplicar2(1,2);// De esta manera se guarda el resultado que es 2
console.log(dos);

var multiplicacion = multiplicar2;//Asi se guarda toda la funcion, guardando la definicion de la funcion, sin parentesis despues del nombre de la funcion.
console.log(multiplicacion(4,6));

var hola = function() {
    console.log('Hola');
}
hola();//Hola
console.log(hola());//undefied

var resultdo = hola();
console.log(resultdo);//undefined
console.log('Hola: ',hola);//Nos devuelve la definicion de la funcion cuando se pone sin parentesis.
//funcion anonima la que no tiene nombre, las cuales no se pueden ponder donde sea, se puede poner donde la variable ya este definida.

function hazAlgo(algo) {
    algo()
};//Caracteristicas de la funcion: tiene un parametro con el nombre algo, envia funciones como parametros.

hazAlgo(function () {console.log('Hola')});
hazAlgo(function () {return 2});

function  transformarNumero(numero,transformacion) {
    transformacion(numero);
}
transformarNumero(5,function (numero) {
    return numero*2;
});
transformarNumero(8,function (numero) {
    return numero/2;
});