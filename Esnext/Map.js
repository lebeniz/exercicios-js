const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react);
console.log(tecnologias.get('react').framework);

const chavesVariasdas = new Map([
    [function(){}, 'function'],
    [{}, 'objcto'],
    [123, 'numero']
])

chavesVariasdas.forEach((vl, ch) => {
    console.log(ch, vl);
})

console.log(chavesVariasdas.has(123));
chavesVariasdas.delete(123)
console.log(chavesVariasdas.has(123));
console.log(chavesVariasdas.size);
chavesVariasdas.set(123, 'a')
chavesVariasdas.set(123, 'b')//é permitido a duplicação de valores, mas não de chave
chavesVariasdas.set(456, 'b')

console.log(chavesVariasdas);