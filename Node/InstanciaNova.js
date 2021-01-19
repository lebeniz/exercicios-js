// uma fatory retorna um novo objeto

module.exports = () => {// module.export é igual a um função que retorna uma função construtora
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}