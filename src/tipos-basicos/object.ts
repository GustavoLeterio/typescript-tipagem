//Tipagem pouco usual, mas representa um objeto

const objeto: object = {
  Nome: "Gustavo",
  Idade: 19,
};

// É mais comum criar um objeto desta forma

//Type é uma forma de criar uma forma de objeto:

type pessoa = {
  Nome: string;
  Idade: number;
};

const gustavo: pessoa = {
  Nome: "Gustavo",
  Idade: 19,
  // foraDaForma:"errado" /* Errado */
};
