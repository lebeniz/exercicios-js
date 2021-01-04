/*
A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
*/

function buscarPalavrasSemelhantes(string, arrayDeString){
    let b,c, a = [];
    b = 0;
    for(i = 0; i < arrayDeString.length; i++){
        let z=0;
        do{
            let c = 0;
            for(j = b; j < arrayDeString.length; j++){
                if(string[c] == arrayDeString[j]){
                    a[i] = a[i] + 1;
                }
                c++;
            }
            b++;
        }while(a[i]!=3 || j < arrayDeString.length)
        console.log(a);
    }
    
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])