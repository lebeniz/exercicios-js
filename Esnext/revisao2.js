//Arrow function
const soma = (a, b) => a + b 
console.log(soma(1,1,'\n'));

//Arraow function (this)
const lexico1 = () => console.log(this === exports);//dentro de um função arrow, o this sempre aponta para module.exports, exports
const lexico2 = lexico1.bind({})// ja na função comun, ele aponta para o global
lexico1()
lexico2()

//parametro default
function log(texto = 'texto'){
    console.log(texto);
}
log()

//operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n) 
    return total
}

console.log(total(2,3,4,5));