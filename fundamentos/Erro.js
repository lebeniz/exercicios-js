// try / catch / throw

function TratarErroElancar (erro){//throww serve para lançar alguma coisa
    throw new Error('...');
    /*throw 10;
    throw true;*/
    throw {
       nome: erro.name,
       msg: erro.mensagem,
       date: new Date
    }
}
 
function ImprimirNomeGitado(obj){
    try{//try significa tentar
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {//catch, significa pegar se não deu certo pelo try
        TratarErroElancar (e)
    } finally {// da semprempe a mensagem indepedente de qualquer coisa
        console.log('final');
    }
}

ImprimirNomeGitado({name: 'caju'});