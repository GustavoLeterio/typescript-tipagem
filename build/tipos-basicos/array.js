"use strict";
let catList;
catList = ["Simba", "Nala", /*5 ->errado, só aceita string*/];
let simba = catList[0]; /* Certo */
// let simba:string[] = catList[0]; /* Errado */ Pois catList[0] é uma string, não um array de strings como "catList" é
let position = 1;
function showCat(cats, pos) {
    let cat = cats[--pos];
    return cat;
}
console.log(showCat(catList, position)); /* Certo */
// console.log(handleBool("bool"));  /* Errado */
//IMPORTANTE: O tipo STRING != STRING[] //
// function showCat(cats:string[]):string{
//     return cats;
// }    Está função retorna um string[], não um string por isso está errado.
