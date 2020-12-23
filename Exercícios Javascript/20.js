/*
Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.
*/

function areaDoTriangulo(a, b){
    return (a * b) / 2;
}


console.log(areaDoTriangulo(10, 15).toFixed(2));
console.log(areaDoTriangulo(7, 9).toFixed(2));
console.log(areaDoTriangulo(9.25, 13.1).toFixed(2));