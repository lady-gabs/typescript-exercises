// exemplo simples
let pessoa: [string, string, number];
pessoa = ['Gabriella', 'Intern', 22];
// pessoa = [22, 'Gabriella', 'Intern'];

console.log(pessoa);

// exemplo de acesso ao valor da tupla

let pessoa1: [string, string, number];
pessoa1 = ['Gabriella', 'Intern', 22];
console.log(pessoa1[0]);

// exemplo de tuplas com labels
let pessoa2: [nome: string, posicao: string, idade: number] = ['Gabriella', 'Intern', 22];

console.log(pessoa2);


// exemplo com Spread Operator

let listaFrutas: [string, ...string[]] = ['Abacaxi', 'Laranja', 'Maçã', 'Manga'];
console.log(...listaFrutas);

// exemplo com lista heterogênea de tupla:

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

// exemplo de função com tuplas

function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}

let resultado = listarPessoas(['José', 'Maria'], [20, 35]);
console.log(resultado)

// exemplo de tupla com label com Spread Operator numa função

type Nome = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome];
}

console.log(criarPessoa('Gabriella', 'Oliveira'));
console.log(criarPessoa('Gabriella', 'Alves', 'Oliveira'));