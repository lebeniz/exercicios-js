// novo recurso do ES2015

const Pessoa = {
    nome: 'Nani',
    id: 15,
    peso: 70,
    endereco:{
        rua: '10',
        numero: 104
    }
}
//operador destructuring
// Tipo {} = Nome_da_Variavel
// Tipo () = Nome_da_Variavel
// Tipo [] = Nome_da_Variavel

//é diferente de 

// Tipo  Nome_da_Variavel = {}
// Tipo  Nome_da_Variavel = ()
// Tipo  Nome_da_Variavel = []


const {nome,  id} = Pessoa;//cria variavel nome e id extraindo de pessoa
console.log(nome);

const {nome:n, id:i} = Pessoa;// tira o atributo e coloca em outra variavel, como(nome:n)
console.log(n, i);

//destruturando algo que não foi declarado
const {casa, teste} = Pessoa;
console.log(casa, teste);

const {endereco: { rua, numero, quadra}} = Pessoa;
console.log(rua, numero, quadra);