"use strict";
// exemplo básico do tipo any
const a = 22;
const b = ['Gabriella'];
const result = a + b;
console.log(result);
// exemplo de quando o tipo 'any' é inferido implícitamente
/*let frase;
frase = 'Hello World';

console.log(frase);*/
// exemplo de quando usar o tipo any
const formulario = {
    nome: 'Gabriella',
    sobrenome: 'Alves',
    idade: 22,
};
console.log(formulario);
