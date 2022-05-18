let catList: string[];
catList = ["Simba", "Nala", /*5 ->errado, só aceita string*/]; 

let simba:string = catList[0]; /* Certo */
// let simba:string[] = catList[0]; /* Errado */ Pois catList[0] é uma string, não um array de strings como "catList" é

let position:number = 1 

function showCat(cats:string[],pos:number):string{
    let cat = cats[--pos];
    return cat;
}

console.log(showCat(catList,position));       /* Certo */
// console.log(handleBool("bool"));  /* Errado */

//IMPORTANTE: O tipo STRING != STRING[] //

// function showCat(cats:string[]):string{
//     return cats;
// }    Está função retorna um string[], não um string por isso está errado.


