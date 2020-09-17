// IIFS -> Imediately Invoked Function Expression
// função auto invocada

//é interessante para fugir do escopo global
(function(){
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente!');
})()

//formaas erradas da sintaxi
/* 1.
function(){
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente!');
}()
   
   2.
(function(){
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente!');
})
*/