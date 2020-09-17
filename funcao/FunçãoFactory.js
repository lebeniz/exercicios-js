function criarproduto(nome, preco){
    return {
        nome,
        desconto: 5,
        preco
    }
}

const p1 =criarproduto('dado', 50)
console.log(p1);
console.log(`Valor com desconto ${p1.preco - p1.desconto}`);