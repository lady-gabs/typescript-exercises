"use strict";
// exemplo simples
let pessoa;
pessoa = ['Gabriella', 'Intern', 22];
// pessoa = [22, 'Gabriella', 'Intern'];
console.log(pessoa);
// exemplo de acesso ao valor da tupla
let pessoa1;
pessoa1 = ['Gabriella', 'Intern', 22];
console.log(pessoa1[0]);
// exemplo de tuplas com labels
let pessoa2 = ['Gabriella', 'Intern', 22];
console.log(pessoa2);
// exemplo com Spread Operator
let listaFrutas = ['Abacaxi', 'Laranja', 'Maçã', 'Manga'];
console.log(...listaFrutas);
// exemplo com lista heterogênea de tupla:
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// exemplo de função com tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['José', 'Maria'], [20, 35]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Gabriella', 'Oliveira'));
console.log(criarPessoa('Gabriella', 'Alves', 'Oliveira'));
