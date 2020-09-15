Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim;
}

const Imprimeresultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Honra');

    }else if(nota.entre(7, 8.99)){
        console.log('Aprovado');

    }else if(nota.entre(4, 6.99)){
       console.log('Recuperação') 

    }else if(nota.entre(0, 3.99)){
        console.log('Reprovado');

    }else {
        console.log('Invalido');
    }
}

Imprimeresultado(9.5);
Imprimeresultado(7.5);
Imprimeresultado(6.5);
Imprimeresultado(3.5);
Imprimeresultado(-1);
Imprimeresultado(11);
