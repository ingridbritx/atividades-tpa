//4️⃣ Contador Regressivo Peça um número e exiba a contagem regressiva até 0.

const input = require("readline-sync")

let numero = input.questionInt("Digite um número para contagem regressiva: ");
for (let cont = numero; cont >= 0; cont --) {
    console.log(cont);
}



