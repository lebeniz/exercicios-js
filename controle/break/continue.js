const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(x in array){
    if(x == 5){
        break
    }
    console.log(`${x} = ${array[x]}`);
}
console.log('\n');

for(y in array){
    if(y == 5){
        continue
    }
    console.log(y);
}

// criando rotulo para um laço

externo: for(a in array){
    for(b in array){
        if(a == 2 && b == 3){
            break externo;//caso não existice esse rotolu, o break interrompiria o laço mais proximo
        }
        console.log(`par = ${a},${b}`);
    }
}