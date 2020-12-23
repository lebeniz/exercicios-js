/*
Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
*/

function funcaoDaSorte(data){
    numero = Math.random().toFixed(1) * (10 - 0);
    if(numero == data){
        return console.log(`"Parabéns! O número sorteado foi o ${numero}"`);
    }
    console.log(`"Que pena! O número sorteado foi o ${numero}`);
}

funcaoDaSorte(10);

funcaoDaSorte(8);


