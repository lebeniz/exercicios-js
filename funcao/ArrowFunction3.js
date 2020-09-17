let ComparaComThis = function (param){
    console.log(this === param);//this aponta para o objeto global
}

ComparaComThis(global);

const obj = {};

ComparaComThis = ComparaComThis.bind(obj);//a função foi amaarada ao obj, logo
// o this vai apontar para obj

console.log('\n');
ComparaComThis(global);
console.log('\n');
ComparaComThis(obj);

//como fica com função arrow
let ComparaComThisArrow = param => console.log(this === param);
ComparaComThisArrow(global);

//quem é mais forte o bind o arrow function?
console.log('\n');
ComparaComThisArrow = ComparaComThisArrow.bind(obj);
ComparaComThisArrow(obj);