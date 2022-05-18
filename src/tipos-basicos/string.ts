let nome: string;
nome = "Gustavo"; /* Certo */
// nome = 5;      /* Errado */

let sobrenome: string = "Letério";

function nomeCompleto(nome:string,sobrenome:string):string{
    return(`${nome} ${sobrenome}`);
}

console.log(nomeCompleto(nome,sobrenome)); /* Certo */
// console.log(nomeCompleto(nome,5));     /* Errado */


