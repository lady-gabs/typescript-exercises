"use strict";
// exemplo colchetes:
let frutas = ['Abacaxi', 'Laranja', 'Maçã', 'Manga'];
console.log(frutas[3]);
// exemplo array object:
let frutas1 = ['Abacaxi', 'Laranja', 'Maçã', 'Manga'];
console.log(frutas1[1]);
// exemplo adicionando mais strings com push
let idiomas = ['português', 'inglês', 'japonês', 'coreano'];
console.log(idiomas);
idiomas.push('francês');
console.log(idiomas);
idiomas.push('alemão');
console.log(idiomas);
// exemplo identificando tamanho do array com length
let idiomas1 = ['português', 'inglês', 'japonês', 'coreano'];
console.log(idiomas1.length);
// exemplo array com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// exemplo array com laço de iteração
let linguagensArray = new Array('JavaScript', 'Java', 'PHP', 'C');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
