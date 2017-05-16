/**
 * Created by USRDEL on 16/5/17.
 */


//let holamundo = `Que tal mundo cuel`;
//console.log("hola mundo");

// boolean
let soltero:boolean = true;  //false

//enteros
let novias =12;

//string
let frasetion = "You´re done";
let otraFrasetion = `El numero de novias es ${novias +1}`;


//arrays

let notas: number[]=[1,2,34] //[]
let jaladas:Array<number>=[1,2,3] //[]


let nombre:any = "asd"
nombre = 12;

let usuario: UsuarioLogin ={
    nombre:"Kevin",
    apellido:"Mendoza",
    direccion:"Panamericana norte"

}


interface UsuarioLogin{
    nombre:string,
    apellido:string,
    direccion?: String   // el ? hace opcional el atributo
}

class persona {
    public nombre:string = "Nom"; //pubico por defectp+o
    private apellido:string ;
    public fechaNacimiento:Date;


    constructor(nombre:string,
                apellido:string,
                fechaNacimiento?:Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }
}

