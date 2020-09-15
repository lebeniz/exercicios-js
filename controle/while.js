function GetInteiroAleatorioEntre (min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let op = 0;

while ( op != -1){
    op = GetInteiroAleatorioEntre(-1,10);
    console.log(`valor selecionado foi ${op}`);
}

console.log('Até a Próxima!');