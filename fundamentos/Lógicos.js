function Compras(trabalho1, trabalho2){
    const ComprarSovete = trabalho1 || trabalho2;
    const ComprarTv50 = trabalho1 && trabalho2;
    // não existe um ou exclusivo(xor / ^) para trabalhar com tipo boleano
    // artifício tecnologico para fazer (xor / ^) trabalhar com valor verdadeiro/falso
    // const ComprarTv32 = !!(trabalho1 ^ trabalho2); bitwise xor(comparação bite a bite )

    const ComprarTv32 = trabalho1 != trabalho2;// != pode ser usado como ou exclusivo dando
                                               // certo se apenas os valores forem diferente
    const ManterSaldavel = !ComprarSovete;  

    return {ComprarSovete, ComprarTv50, ComprarTv32, ManterSaldavel};
}

console.log(Compras(true, true));
console.log(Compras(false, true));
console.log(Compras(true, false));
console.log(Compras(false, false));