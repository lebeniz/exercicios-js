let contador = 1;
while(contador <=10 ){
    console.log(contador);
    contador++;
}

for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`);
}

const nota = [2.3, 6.3, 8.9, 4.5]
for(let i = 0; i < nota.length; i++){// ".length" serve para pegar o tamanho total do array
    console.log(`nota = ${nota[i]}`);
}