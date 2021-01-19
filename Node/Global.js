//console.log(global);

globalThis.MinhaApp = Object.freeze({//faz  uso do object.freeze para não permitir alteração do objeto global
    sladacao () {
         return 'Estou em todos os lugares'
    },
    nome: 'Sistema legal'
})