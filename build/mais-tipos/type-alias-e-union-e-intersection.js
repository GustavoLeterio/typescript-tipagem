"use strict";
//Exige Nome e Idade e talvez Emprego
let Pessoa1 = {
    Nome: "Gustavo",
    Idade: 18,
    Emprego: ["Estagiário", "Estudante"],
};
//Exige Nome e Idade e talvez Emprego
let Pessoa2 = {
    Nome: "Josefina",
    Idade: 64,
};
function logMessage(message, level) {
    console.log(`Level: ${level} | message: ${message}`);
}
logMessage("Uma mensagem Info", "info"); /* Certo  */
//Defino a variável com todas as propriedades
let thisProfile = {
    Nome: "Gustavo",
    Idade: 18,
    bio: "Adoro programar",
    interests: ["nature", "music", "art"]
};
// let wrongProfile:Profile = {
//     Nome:"Gustavo",
//     Idade:18,
//     qualquerCoisaQueNãoDefini:5,
// } /* Errado */
let intersectBagunça = {
    Nome: "Gustavo",
    Idade: 18,
    qualquerCoisaLoca: "Doidera lek"
};
