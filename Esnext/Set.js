const { timeStamp, time } = require("console")

//NÃO ACEITA REPETIÇÃO/ E NÃO É INDEXADA
const times = new Set()
times.add('vasco')
times.add('são paulo').add('palmeiras').add('corinthians')
times.add('flamengo')
times.add('vasco')

console.log(times);
console.log(times.size);
console.log(times.has('VASCO'));
console.log(times.has('vasco'));
times.delete('flamengo')
console.log(times.has('flamengo'));

const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet);