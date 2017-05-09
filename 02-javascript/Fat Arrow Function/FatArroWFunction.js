var holaMundo = function(){console.log("Hola mundo")}
holaMundo()

var holaMundo2 = ()=>{return "Hola mundo2"}
holaMundo2()

var holaMundo3 = ()=> "Hola mundo3"
holaMundo3()


var holaMundo4 = nombre=> `Hola: ${nombre}`
holaMundo4('Kevin')

var holaMundo4 = (nombre,apellido)=> `Hola: ${nombre} ${apellido}`
holaMundo4('Kevin','Mendoza')