"use strict";
//Função que nunca retornará um valor
//ou que retorna um disparo de erro
function neverFunc() {
    while (true)
        ;
    // ou 
    //   throw new console.error("erro");
}
//Função que nunca retornará um valor
//ou que retorna um disparo de erro
function voidFunc() {
    console.log("Está função não tem nada a dizer!");
}
