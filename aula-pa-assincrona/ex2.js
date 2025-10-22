//2️⃣ Pares e Ímpares Peça um número final e exiba todos os números pares e ímpares até ele.


const input = require("readline-sync");

let limite = input.questionInt("Digite o número final: ");
console.log("Números pares e ímpares até", limite);
for (let i = 0; i <= limite; i++) {
    if (i % 2 ===0) {
        console.log(i, "- Par");
    }   else {
        console.log(i, "- Ímpar");
    }
}
console.log("-");