//7️⃣ Maior e Menor Número Leia vários números até o usuário digitar 0. Mostre o maior e o menor número digitado.

const input = require("readline-sync");

let numero = -1;
let maior = null;
let menor = null;

while (numero != 0) {
    numero = input.questionInt("Digite um numero (0 para sair): ");

    if (numero != 0) {
        if (maior === null || numero > maior) {
            maior = numero;
        }

        if (menor === null || numero < menor) {
            menor = numero;
        }
    }
}

if (maior === null) {
    console.log("Usuário não digitou números.");
} else {
    console.log(`O maior número é: ${maior}`);
    console.log(`O menor número é: ${menor}`);
}
