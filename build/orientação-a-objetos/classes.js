"use strict";
//Classes
//Crio uma nova classe chamada de Usuário
class Usuario {
    //Construtores ----------------------------------------------------------------------------------------------------------------------
    //Construo a ficha do meu usuário.
    constructor(nome, idade) {
        this.nome = nome; //Nessa ficha terá o campo Nome
        this.idade = idade; //Nessa ficha terá o campo Idade
    } /* Usuario{ nome:"gustavo", idade:18 } */
}
//Extends ----------------------------------------------------------------------------------------------------------------------------
//Crio uma classe chamada de Jogador, que empresta os tipos da classe Usuário (nome e idade), já que o jogador também é um usuário.
class Jogador extends Usuario {
    //Construo a ficha do meu jogador.
    constructor(nome, idade, jogo) {
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
console.log(`Este cara ta jogando ${Jogador1.dizerOJogoAtual()} mermão, ta maluco!`);
//Como o método não exige valor previamente passado, posso invoca-lo usando a nomenclatura da classe, não a variável que a contém
console.log(`Exatamente e calibradamente ás ${Jogador.horario()}`);
//Crio uma nova classe chamada de Usuário
class Jogo {
    //crio a ficha do meu jogo
    constructor(nome) {
        this.nome = nome;
    }
    //Criando método getter, para exportar valor privado
    getNome() {
        return this.nome;
    }
}
class JogoComDescricao extends Jogo {
    //crio a ficha do meu jogo
    constructor(nome, descricao) {
        super(nome);
        this.descricao = descricao;
    }
    //Criando método getter, para exportar valor privado
    getJogo() {
        return `${this.nome} | ${this.descricao}`;
    }
}
const lol = new JogoComDescricao("LoL", "LoL jogo de Loco");
// lol.nome = "outro nome" /* Como o valor é protegido, então não posso chamá-lo aqui */
// console.log(lol.nome); /* Como o valor é protegido, então não posso chamá-lo aqui */
// lol.descricao = "outro nome" /* Como o valor é Privado, então não posso chamá-lo aqui */
// console.log(lol.descricao); /* Como o valor é privado, então não posso chamá-lo aqui */
console.log(lol.getJogo()); // Por isso existe os getters, métodos que retornam os valores Privados/Protegidos.
