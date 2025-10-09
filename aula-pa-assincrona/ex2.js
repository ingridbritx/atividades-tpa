const input = require("readline-sync");

let limite = input.questionInt("Digite o número final: ");
console.log("Números pares e ímpares até", limite);
for (let i = 1; i <= limite; i++) {
    if (i % 2 ===0) {
        console.log(i, "- Par");
    }   else {
        console.log(i, "- Ímpar");
    }
}
console.log("-");