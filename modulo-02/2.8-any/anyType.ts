// exemplo básico do tipo any
const a: any = 22;
const b: any = ['Gabriella'];

const result = a + b;
console.log(result);

// exemplo de quando o tipo 'any' é inferido implícitamente
/*let frase;
frase = 'Hello World';

console.log(frase);*/

// exemplo de quando usar o tipo any

const formulario: { [campoFomulario: string]: any } = {
  nome: 'Gabriella',
  sobrenome: 'Alves',
  idade: 22,
};

console.log(formulario);