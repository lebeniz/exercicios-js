// Par Nome/Valor
const Saldacao = 'Olá';
function exec(){
    const Saldacao = 'saldacao diferente em escopo diferente';
    return Saldacao;
}

const Cliente = {//declaração de objeto(tipo nome_da_variavel = {})
    nome: 'Nani',
    idade: 10, 
    peso: 90,
    endereco: {//declaração de obejeto dentro de objeto (nome_da_variavel: {})
        rua: 'dezessseis',
        numero: 104
    }
}
console.log(Saldacao);
console.log(exec());
console.log(Cliente);