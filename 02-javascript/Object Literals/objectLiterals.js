/*function definirObjetoUsuario(nombre){
 return {
 nombre:nombre,
 saludar:function(){
 return "Hola"+this.nombre;
 },
 twitteo:function(tweet){
 return this.nombre+" twitteo sobre: "+tweet;
 },
 }
 }*/

//Object Literals

var nuevaFuncion = (nombre,apellido)=>{

    var usuario1 ={
        nombre: nombre,
        apellido
    };
    console.log('Hola ' +usuario1.nombre+usuario1.apellido);

    let usuario2 = {
        nombre
    };
    console.log(usuario2.nombre,usuario2.apellido);
}

nuevaFuncion('Kevin ', ' Mendoza')
