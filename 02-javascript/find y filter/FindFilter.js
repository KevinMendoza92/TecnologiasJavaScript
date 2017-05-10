//find y filter
//find encuentra la primera ocurrencia del objeto
//Si se puede concatenar operadores

//Filter filtra un arreglo y devuelve los elementos
//que cumplan la condición del filtro

let arreglo = [8,6,9,10,4,2,7,8];

let notasDeSupletorio = arreglo.map((valor,indice)=>{
        return valor/5;
})
/*.filter((valor)=>{
 return valor<1;
 })*/
.find((valor)=>{
    return valor=1;
});

console.log(notasDeSupletorio);