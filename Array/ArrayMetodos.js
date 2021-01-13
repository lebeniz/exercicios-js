const pilotos = ['Vettel', 'Alonso', 'Raikkone', 'Massa']
pilotos.pop()// remove o ultimo elemento da lista
console.log(pilotos);

pilotos.push('Verstappen');//add elemento no final do array
console.log(pilotos);
pilotos.shift()// remove o primeiro elemento da lista
console.log(pilotos);
pilotos.unshift('Hamilton')// add elemento no inicio do array
console.log(pilotos);

//splice pode addcionar e remover

//adcionar
pilotos.splice(2, 0, 'Bottas', 'Massa')//add os dois elemento antes do indice 2
console.log(pilotos);

//remover
pilotos.splice(3, 1)
console.log(pilotos);

const algunsPilotos = pilotos.slice(2)//novo array a partir do indice dois
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4)//novo array a partir de 1 até antes do 4, ou seja inclui apenas o indice 3
console.log(algunsPilotos2);
