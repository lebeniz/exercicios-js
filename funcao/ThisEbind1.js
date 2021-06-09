const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this === global)
        console.log(this.saudacao);
        console.log('\n')
    }
}

pessoa.falar();

const falando = pessoa.falar
falando();//conflito entre paradigmas: funcional e orientação a objeto

const falarDEpessoa = pessoa.falar.bind(pessoa);/*a função bind, resolve o conflito 
com o this, em outras palavras o bind é responsavel por amarrar um determinado objeto
para ele ser o dono da execução daquele metodo, sempre que aquele metodo for chamado 
*/
falarDEpessoa();