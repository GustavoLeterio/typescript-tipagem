"use strict";
let nome;
nome = "Gustavo"; /* Certo */
// nome = 5;      /* Errado */
let sobrenome = "Letério";
function nomeCompleto(nome, sobrenome) {
    return (`${nome} ${sobrenome}`);
}
console.log(nomeCompleto(nome, sobrenome)); /* Certo */
// console.log(nomeCompleto(nome,5));     /* Errado */
