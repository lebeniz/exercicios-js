const fabricante = ['fiat', 'bmw', 'honda'];

//callback dispara quando acontece um evento, o evento é o loop puxando cada elemento
//dentro do loop, quando encontra um novo elemento, chamo denovo o callback
//para cada elemento a função chama o callback passando o proprio elemento e o indice
function imprime(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricante.forEach(imprime);