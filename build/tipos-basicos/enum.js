"use strict";
//enum é como um objeto, mas quando a indicação não tem valor, ele retorna um número referente a posição do indicador.
var Permissoes;
(function (Permissoes) {
    Permissoes[Permissoes["admin"] = 0] = "admin";
    Permissoes[Permissoes["editor"] = 1] = "editor";
    Permissoes[Permissoes["comum"] = 2] = "comum";
    Permissoes[Permissoes["anonimo"] = 3] = "anonimo";
})(Permissoes || (Permissoes = {}));
;
console.log(Permissoes);
console.log(Permissoes.admin);
console.log(Permissoes.editor);
console.log(Permissoes.comum);
console.log(Permissoes.anonimo);
var PermissoesNomeadas;
(function (PermissoesNomeadas) {
    PermissoesNomeadas["admin"] = "ADMIN";
    PermissoesNomeadas["editor"] = "EDITOR";
    PermissoesNomeadas["comum"] = "COMUM";
    PermissoesNomeadas["anonimo"] = "ANONIMO";
})(PermissoesNomeadas || (PermissoesNomeadas = {}));
;
console.log(PermissoesNomeadas);
console.log(PermissoesNomeadas.admin);
console.log(PermissoesNomeadas.editor);
console.log(PermissoesNomeadas.comum);
console.log(PermissoesNomeadas.anonimo);
//Por padrão, ao adicionar um valor em um dos indicadores, todos os outros devem receber valores
