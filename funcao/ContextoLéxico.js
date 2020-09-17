const valor = 'Global';

function minnhaFuncao(){// a função carra consigo o contexto daonde ela foi escrita
    //por isso ao ser invocado em um espaço local, ela se comporta como global
    console.log(valor);
}

function exec(){
    const valor = 'Local';
    minnhaFuncao();//essa função procura a variavel dentro do escopo aonde ela foi
    //definida, por isso ela usa o valor global
}
exec();