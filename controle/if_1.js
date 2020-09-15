function SoBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado ' + nota);
    }
}
SoBoaNoticia(8);

function seForVerdade(valor){
    if(valor){
        console.log('Verdadeiro ', valor);

    }
}
seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade('casa');
seForVerdade(NaN);
seForVerdade('');
seForVerdade(0);
seForVerdade(-1);
seForVerdade(' ');
seForVerdade([]);
seForVerdade([1,2]);
seForVerdade({});
seForVerdade({casa: 1, quadra: 3});
