//1️⃣3️⃣ Estatísticas Leia vários números até o usuário digitar 0. Mostre:Quantos números foram digitados, A média deles, O maior e o menor valor

const input = require("readline-sync");

let numero = -1;
let soma = 0;
let cont = 0;
let media = 0;
let maior = null;
let menor = null;

while (numero !== 0) {
    numero = input.questionInt("Digite um número (0 para sair): ");

    if (numero !== 0) {
        soma += numero;
        cont++;

        if (maior === null || numero > maior) {
            maior = numero;
        }

        if (menor === null || numero < menor) {
            menor = numero;
        }
    }
}

if (cont > 0) {
    media = soma / cont;
    console.log("\n=== Estatísticas ===");
    console.log("Quantidade de números:", cont);
    console.log("Média:", media.toFixed(2));
    console.log("Maior número:", maior);
    console.log("Menor número:", menor);
} else {
    console.log("Nenhum número foi digitado.");
}
