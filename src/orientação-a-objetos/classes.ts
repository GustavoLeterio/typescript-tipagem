//Classes

//Crio uma nova classe chamada de Usuário
class Usuario {
  public nome; // O usuário terá um Nome
  public idade; // O usuário terá uma Idade

  //Construtores ----------------------------------------------------------------------------------------------------------------------

  //Construo a ficha do meu usuário.
  constructor(nome: string, idade: number) {
    this.nome = nome; //Nessa ficha terá o campo Nome
    this.idade = idade; //Nessa ficha terá o campo Idade
  } /* Usuario{ nome:"gustavo", idade:18 } */
}

//Extends ----------------------------------------------------------------------------------------------------------------------------

//Crio uma classe chamada de Jogador, que empresta os tipos da classe Usuário (nome e idade), já que o jogador também é um usuário.
class Jogador extends Usuario {
  public jogo; // O jogador irá jogar algo

  //Construo a ficha do meu jogador.
  constructor(nome: string, idade: number, jogo: string) {
    super(nome, idade); // Já que estou extendendo Usuario, devo usar o método super(), para incorporar os dados da mesma.
    this.jogo = jogo; //Nessa ficha saberemos o jogo.
  } /* Usuario{ nome:"gustavo", idade:18, jogo:"LoL" } */

  //Métodos --------------------------------------------------------------------------------------------------------------------------

  //Crio um método que retorna o jogo da pessoa.
  dizerOJogoAtual() {
    return this.jogo;
  }

  //Static --------------------------------------------------------------------------------------------------------------------------

  //Crio um método estático, isto é, um método que não depende de um valor previamente informado como nome,idade ou jogo.
  static horario() {
    return Date();
  }
}

const Jogador1 = new Jogador("Gustavo", 25, "LoL");
console.log(
  `Este cara ta jogando ${Jogador1.dizerOJogoAtual()} mermão, ta maluco!`
);

//Como o método não exige valor previamente passado, posso invoca-lo usando a nomenclatura da classe, não a variável que a contém
console.log(`Exatamente e calibradamente ás ${Jogador.horario()}`);

//Crio uma nova classe chamada de Usuário
class Jogo {
  //Protected ------------------------------------------------------------------------------------------------------------------------

  protected nome; // O jogo terá um Nome privado, isto é, não pode ser referenciado fora da classe, apenas em classes em que foi extendida e nela mesma.

  //crio a ficha do meu jogo
  constructor(nome: string) {
    this.nome = nome;
  }

  //Criando método getter, para exportar valor privado
  getNome(): string {
    return this.nome;
  }
}

class JogoComDescricao extends Jogo {
  //Private ------------------------------------------------------------------------------------------------------------------------

  private descricao; // O jogo terá uma Descrição privada, isto é, não pode ser referenciado fora da classe e nem em classes em que foi extendido;

  //crio a ficha do meu jogo
  constructor(nome: string, descricao: string) {
    super(nome);
    this.descricao = descricao;
  }

  //Criando método getter, para exportar valor privado
  getJogo(): string {
    return `${this.nome} | ${this.descricao}`;
  }
}

const lol = new JogoComDescricao("LoL", "LoL jogo de Loco");

// lol.nome = "outro nome" /* Como o valor é protegido, então não posso chamá-lo aqui */
// console.log(lol.nome); /* Como o valor é protegido, então não posso chamá-lo aqui */
// lol.descricao = "outro nome" /* Como o valor é Privado, então não posso chamá-lo aqui */
// console.log(lol.descricao); /* Como o valor é privado, então não posso chamá-lo aqui */

console.log(lol.getJogo()); // Por isso existe os getters, métodos que retornam os valores Privados/Protegidos.
