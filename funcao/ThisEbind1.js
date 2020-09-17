const pessoa = {
    saudacao: 'Bom dia',
    falar (){
        console.log(this.saudacao);
    }
}

pessoa.falar();

const falar = pessoa.falar
falar();//conflieto entre paradigmas: funcional e orientação a objeto

const falarDEpessoa = pessoa.falar.bind(pessoa);/*a função bind, resolve o conflito 
com o this, em outras palavras o bind é responsavel por amarrar um determinado objeto
para ele ser o dono da execução daquele metodo, sempre que aquele metodo for chamado 
*/
falarDEpessoa();