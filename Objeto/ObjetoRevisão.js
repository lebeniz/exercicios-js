// coleção dinamica de pares chave/valor
const produto = new Object;
produto.nome = 'cadeira';
produto['marca do produto'] = 'generica';
produto.preco = 220;

console.log(produto);
delete  produto.preco;
delete produto['marca do produto'];

console.log(produto);

const carro = {
    modelo: 'A4',
    valor:10000,
    proprietrario: {
        nome: 'Raul',
        idade: 20,
        endereco: {
            logradouro: 'RUA A',
            numero: 123
        }
    },
    condutores:[{nome: 'Junior', idade: 23}, 
        {nome: 'Breno', idade:20}
        ],
    calcularValorDoSeguro:function(){
        //...
    }
}

carro.proprietrario.endereco.numero = 1000;
console.log(carro);
delete carro.condutores;
delete carro.proprietrario.endereco;
delete carro.calcularValorDoSeguro;

console.log(carro);
