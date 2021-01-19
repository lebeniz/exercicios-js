console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logthis(){
    console.log('\nDentro da função');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);

    this.perigo = '...' //atribuindo algo ao escopo global
}

logthis()

console.log('\n',perigo);