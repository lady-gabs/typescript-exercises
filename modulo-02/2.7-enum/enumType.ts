// exemplo básico de enums (Enums Numérico)

enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
  }
  
  console.log(Idioma);
  
  // exemplo de String Enums
  
  enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM',
  }
  
  console.log(Dia);
  
  // exemplo de como acessar um valor de um enum com uma chave (usando o const)
  
  /*const enum Comida {
    Hamburger,
    Macarrao,
    Pizza,
    Bolo,
    Lasanha,
  }
  
  function comida(c: Comida) {
    return 'Comidas muito saborosas!';
  }
  
  console.log(comida(Comida.Bolo));
  console.log(comida(Comida.Lasanha));
  console.log(comida(5));   // imprimirá o return e não dará erro (por mais que esteja errado)
*/
  
  const enum Comida {
    Hamburger = 'Hamburger',
    Macarrao = 'Macarrão',
    Pizza = 'Pizza',
    Bolo = 'Bolo',
    Lasanha = 'Lasanha',
  }
  
  function comida(c: Comida) {
    return 'Comidas muito saborosas!';
  }
  
  console.log(comida(Comida.Bolo));
  console.log(comida(Comida.Lasanha));
  // console.log(comida(5));    //não imprimirá o return e apontará um erro de sintaxe
  
  // exemplo de quando usar enum
  enum Tarefa {
    Todo,
    Progress,
    Done,
  }
  
  const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Tarefa concluída',
  };
  
  if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Tarefa concluída com sucesso!');
  }