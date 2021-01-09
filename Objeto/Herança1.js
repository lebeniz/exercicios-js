//prototypo é objeto pai

const ferrari = {
    modelo:'F40',
    velMax: 340,
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__);//serve para acessar o prototypo do objeto ferrari
console.log(ferrari.__proto__===Object.prototype);
console.log(volvo.__proto__===Object.prototype);
console.log(Object.prototype.__proto__);// ele é o ultimo pai, logo ele aponta para null

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);