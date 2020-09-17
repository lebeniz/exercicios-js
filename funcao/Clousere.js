//closure é um escopo criado quando a função e declarada
//esse escopo permite a função acessar e manipular variaveis externa a função
//closure -> fechmento, algo que envolve alguma coisa (closure)

//Contexto léxico em ação

const x = 'Global';

function fora (){
    const x = 'Local';
    function dentro(){//cada função tem memoria do escopo aonde ela foi criado
        return x;
    }
    return dentro;
}

const minhaFuncao = fora(); 
console.log(minhaFuncao());