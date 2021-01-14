const moduloA = require('./ModuloA')// objeto exportado de outro arquivo
const moduloB = require('./ModuloB')//objeto

console.log(moduloA.ola);
console.log(moduloA.BemVindo);
console.log(moduloA.atelogo);
console.log('\n',moduloA);

console.log(moduloB.bomdia);
console.log(moduloB.boanoite());
console.log(moduloB);