// Estrategia para gerar valor padrão

function soma1(a, b, c){
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1(), soma1(2), soma1(2, 3), soma1(5, 9, 7), soma1(0, 0, 0));

//estrategia 2 3 4 para gerar valor padrão
console.log('\n');
function soma2(a, b, c){
    a = a !== undefined? a: 1;
    b = 1 in arguments? b: 1;
    c = isNaN(c)? 1: c;

    return a + b + c;
}
console.log(soma2(), soma2(2), soma2(2, 3), soma2(5, 9, 7), soma2(0, 0, 0));

//valor padão Es2015
console.log('\n');

function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}
console.log(soma3(), soma3(2), soma3(2, 3), soma3(5, 9, 7), soma3(0, 0, 0));
