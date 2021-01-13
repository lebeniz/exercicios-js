class Lacamento {
    constructor(nome = 'Genérico', valor = 0){
    this.nome = nome
    this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.ano = ano
        this.mes = mes
        this.lacamentos = []
    }
    addLacamento(...lacamentos){// ... ->concatena todos os paramentro em um array
        lacamentos.forEach(l => this.lacamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lacamentos.forEach(l => {
             valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lacamento('salario', 880)
const contaDeLuz = new Lacamento('contaDeLuz', -150)
const contas = new CicloFinanceiro(01, 2021)
contas.addLacamento(salario, contaDeLuz)
console.log(contas.sumario()); 