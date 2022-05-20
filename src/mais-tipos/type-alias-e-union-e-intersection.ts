//Type Alias
//Lembra um struct em C, ele estabelece um tipo que deve conter nome e idade e, devido ao "?", ele pode conter emprego.
type Pessoa = {
  Nome: string;
  Idade: number;
  Emprego?: string[];
};

//Exige Nome e Idade e talvez Emprego
let Pessoa1: Pessoa = {
  Nome: "Gustavo",
  Idade: 18,
  Emprego: ["Estagiário", "Estudante"],
};

//Exige Nome e Idade e talvez Emprego
let Pessoa2: Pessoa = {
  Nome: "Josefina",
  Idade: 64,
};













//Union Types indica que o valor deve ser algo ou outro.
type LogLevel = "info" | "error" | "debug";

function logMessage(message: string, level: LogLevel) {
  console.log(`Level: ${level} | message: ${message}`);
}

logMessage("Uma mensagem Info", "info");               /* Certo  */
// logMessage('Uma mensagem Info','Nada do definido'); /* Errado */












//Type Intersection é a união de dois tipos distintos.
//crio o tipo sobre
type Sobre = {
    bio:string;
    interests:string[];
}

//Intersecto ele com Pessoa previamente criado
type Profile = Pessoa & Sobre;

//Defino a variável com todas as propriedades
let thisProfile:Profile = { /* Certo */
    Nome:"Gustavo",
    Idade:18,
    bio:"Adoro programar",
    interests:["nature","music","art"]
} 

// let wrongProfile:Profile = {
//     Nome:"Gustavo",
//     Idade:18,
//     qualquerCoisaQueNãoDefini:5,
// } /* Errado */

let intersectBagunça:Pessoa & {
    qualquerCoisaLoca:string;
} = {
    Nome:"Gustavo",
    Idade:18,
    qualquerCoisaLoca:"Doidera lek"
}