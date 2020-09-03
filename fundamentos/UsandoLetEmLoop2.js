const funcs = [];

for(let i =0; i< 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
//alcontrario do var, com o let da certo, pois, let
// tem escopo de bloco ou de função
funcs[2]();
funcs[5]();
funcs[9]();