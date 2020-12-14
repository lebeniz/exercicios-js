//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
function MaiorOuMenor (a, b){
    if(a >= b){
        return true;
    }else{
        return false
    }
}

console.log(MaiorOuMenor(1, 1), '\n');
console.log(MaiorOuMenor(0, "0casa"), '\n');
console.log(MaiorOuMenor(1, 5), '\n');
console.log(MaiorOuMenor(6, 1), '\n');