console.log('a =', a);
var a = 'a';
console.log('a =', a);// acontece um hositing, que é quando a variavel
                     // e jogada para cima, com se ela estiversse declarada

                    /* Dessa forma
                     * var a;
                     * console.log('a =', a);
                     * a = 'a';
                     * console.log('a =', a);
                    */

//trabalhando com le, o efeito de içamento ou hoisting, não aconteçe
// ou seja, gera eero
console.log('b =', b);
let b = 'b';
console.log('b =', b);