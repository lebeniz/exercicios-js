const ImprimeResultado = function(nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            console.log('Quadro de honra');
            break

        case 7: case 8:
            console.log('Aprovado');
            break
        
        case 6: case 4: case 5: 
            console.log('Recuperação');
            break

        case 1: case 2: case 3: case 0:
            console.log('Reprovado');
            break

        default :
            console.log('Invalido');
            break
    }
}

ImprimeResultado(10);
ImprimeResultado(8.9);
ImprimeResultado(6.9);
ImprimeResultado(2.3);
ImprimeResultado(-1);
ImprimeResultado(11);