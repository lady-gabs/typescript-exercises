// variáveis
let nome: string = 'Gabriella'
console.log(nome)

// array
let animais: string[] = ['Gato', 'Cachorro', 'Leão', 'Macaco'];
console.log(animais);

// object
let carro: {
    nome: string;
    ano: number;
    preco: number
};

carro = {nome: 'Ford Ka', ano: 2008, preco: 8000};
console.log(carro);

// function
function multiplyNumbers(num1:number, num2: number) {
    return num1 * num2
}
console.log(multiplyNumbers(3, 4))