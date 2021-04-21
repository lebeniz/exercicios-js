let teclado = require('prompt-sync')();

function calcIr (salario){

    if(salario < 2000.01){
        return console.log('insento');
    }else if(salario < 3000.01){
        let ir = (salario - 2000) * 0.08
        return console.log('R$ ' + ir.toFixed(2));
    }else if(salario <= 4500){
        let sal = salario  - 3000
        let taxa18 = sal * 0.18
        let taxa8 = (salario - sal - 2000) * 0.08
        
        let ir = taxa18 + taxa8
        return console.log('R$ ' + ir.toFixed(2));
    }else {
        let sal = salario - 4500
        let taxa28 = sal * 0.28
        let sal1 = salario - sal - 3000
        let taxa18 = sal1 * 0.18
        let taxa8 = (salario - sal - sal1 - 2000) * 0.08
        
        let ir = taxa28 + taxa18 + taxa8
        return console.log('R$ ' + ir.toFixed(2));
    }
}
let entrada = teclado('valor:  ');

calcIr(entrada)