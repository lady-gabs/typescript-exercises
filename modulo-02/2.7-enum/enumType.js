"use strict";
// exemplo básico de enums (Enums Numérico)
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
// exemplo de String Enums
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia);
function comida(c) {
    return 'Comidas muito saborosas!';
}
console.log(comida("Bolo" /* Comida.Bolo */));
console.log(comida("Lasanha" /* Comida.Lasanha */));
// console.log(comida(5));    //não imprimirá o return e apontará um erro de sintaxe
// exemplo de quando usar enum
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Tarefa concluída',
};
if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Tarefa concluída com sucesso!');
}
