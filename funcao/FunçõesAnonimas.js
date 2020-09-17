//função anonima é simplismente um função sem nome
 const soma = function(x, y){
     return x + y;
 }

 const ImprimeResultado = function ( a, b, operacao = soma){
     console.log(operacao(a, b));
 }

 ImprimeResultado(2, 7);
 ImprimeResultado(5, 6, soma);

 console.log('\n');
 ImprimeResultado(5, 1, (x, y) => x - y);

 //outro exemplo de função anonima
 const pessoa = {
     falar: function(){
         console.log('Olá');
     }
 }
 pessoa.falar();