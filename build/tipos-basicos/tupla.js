"use strict";
// Tupla é um array que aceita apenas uma quantia fixa de valores, nem mais nem menos.
// Em tupla posso definir mais de um tipo de variável [string,number].
let dogTupla;
dogTupla = ["Nick", 2];
// dogTupla = ["Cão Solitário"]; /* Errado */ Não pode ser apenas um valor sozinho.
// dogTupla = ["Cão amigo",3,"Cão amigo"]; /* Errado */ Não pode ser mais que 2 valores.
let dogName = dogTupla[0];
let dogAge = dogTupla[1];
let pos = 2;
function showDog(dogName, dogAge) {
    return `Nome: ${dogName} | Idade: ${dogAge}`;
}
console.log(showDog(dogName, dogAge));
