//enum é como um objeto, mas quando a indicação não tem valor, ele retorna um número referente a posição do indicador.

enum Permissoes {
  admin,     //Valor 0
  editor,    //Valor 1
  comum,     //Valor 2
  anonimo,   //Valor 3
};
console.log(Permissoes)
console.log(Permissoes.admin);
console.log(Permissoes.editor);
console.log(Permissoes.comum);
console.log(Permissoes.anonimo);

enum PermissoesNomeadas {
  admin = "ADMIN",     //Valor ADMIN
  editor = "EDITOR",   //Valor EDITOR
  comum = "COMUM",     //Valor COMUM
  anonimo = "ANONIMO", //Valor ANONIMO
};

console.log(PermissoesNomeadas);
console.log(PermissoesNomeadas.admin);
console.log(PermissoesNomeadas.editor);
console.log(PermissoesNomeadas.comum);
console.log(PermissoesNomeadas.anonimo);

//Por padrão, ao adicionar um valor em um dos indicadores, todos os outros devem receber valores