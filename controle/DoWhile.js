function GetInteiroAleatorioEntre (min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let op;

do{
    op = GetInteiroAleatorioEntre(-1,10);
    console.log(`valor selecionado foi ${op}`);
}while ( op != -1);

console.log('Até a Próxima!');