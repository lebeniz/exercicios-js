const funcs = [];

for(var i =0; i< 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
//problema historico do js com o varpor causa que var
// não tem escopo de bloco ou de função
funcs[2]();
funcs[5]();
funcs[9]();