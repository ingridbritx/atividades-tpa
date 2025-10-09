const input = require("readline-sync")

let numero = input.questionInt("Digite um número para contagem regressiva: ");
for (let i = numero; i >= 0; i --) {
    console.log(i);
}

console.log("_");

