//em uma função, quando não ha retorno, o retorno é um undefined de forma inplicita
function area(largura, altura) {
    const area = largura * altura;
    if(area > 20){
        console.log(`valo acima do permitido ${area}m2`);
    }else{//casa não execute esse bloco, retorna undefined
        return area;
    }
}

console.log(area(2, 2));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 4, 7, 20));
console.log(area(5, 5));