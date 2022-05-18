"use strict";
//Digo que any cabe qualquer coisa!
//Evite usar any
let qualquerCoisa = 5;
qualquerCoisa = "any";
qualquerCoisa = ["any", "any", 123456, [1, "lol"], { objeto: "objeto", tambem: "tambem" }];
//Any pode incluir valores em variaveis ja tipadas, isso não é bom
let numero = 5;
qualquerCoisa = "3aa";
numero = qualquerCoisa;
console.log(`A variável "numero : number" está passando valor de string: ${numero}.`);
