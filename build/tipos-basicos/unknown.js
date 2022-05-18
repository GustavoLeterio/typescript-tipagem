"use strict";
//Digo que unknown cabe qualquer coisa! Porém, diferente de any, ele tem limitações...
let quaseQualquerCoisa = 5;
quaseQualquerCoisa = "any";
quaseQualquerCoisa = ["any", "any", 123456, [1, "lol"], { objeto: "objeto", tambem: "tambem" }];
//Unknwon pode incluir valores em variaveis ja tipadas, isso não é bom
let num = 5;
quaseQualquerCoisa = "sou uma string"; //Recebe string
// num = quaseQualquerCoisa; /* Errado */
/*Não consigo passar este valor, já que unknown não permite passar seu valor, caso ele seja relativo a um tipo, nesse caso string */
console.log(`A variável "numero : number" está passando valor de string: ${num}.`);
