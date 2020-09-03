function rand([min = 0, max =10]){
    if(min > max) [min, max] = [max, min];
    /* min recebe max e max recebe minio
     * se min > que max
     */
    
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)//função que arredonda para o chão
}
console.log(rand([0, 10]));
console.log(rand([10, 0]));
console.log(rand([1]));
console.log(rand([, 13]));
console.log(rand([]));


