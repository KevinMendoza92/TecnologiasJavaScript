
console.log('Hello world');

var kevin = {
    nombre:"Kevin",
    apellido:"Mendoza",
    fechaNacimiento: new Date(),
    imprimir: function (){
            console.log(this.nombre, this.apellido);
        },
        anio:function () {
            return this.fechaNacimiento.getFullYear();
        },
        diferenciaEdad: function (edadAComparar) {
            return Math.abs(edadAComparar-this.fechaNacimiento.getFullYear());
        }
    }
    kevin.imprimir();
    console.log(kevin.anio());
    console.log(kevin.diferenciaEdad(1992));
