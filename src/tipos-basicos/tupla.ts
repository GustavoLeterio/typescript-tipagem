// Tupla é um array que aceita apenas uma quantia fixa de valores, nem mais nem menos.
// Em tupla posso definir mais de um tipo de variável [string,number].

let dogTupla: [string,number];
dogTupla = ["Nick", 2]; 
// dogTupla = ["Cão Solitário"]; /* Errado */ Não pode ser apenas um valor sozinho.
// dogTupla = ["Cão amigo",3,"Cão amigo"]; /* Errado */ Não pode ser mais que 2 valores.

let dogName:string = dogTupla[0];
let dogAge:number = dogTupla[1];

let pos:number = 2;

function showDog(dogName:string,dogAge:number):string{
    return `Nome: ${dogName} | Idade: ${dogAge}`;
}

console.log(showDog(dogName,dogAge));

