//🔟 Fatorial Calcule o fatorial de um número informado pelo usuário. Exemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120.

const input = require("readline-sync");

let numero = input.questionInt("Digite um numero: ");
let fatorial = 1;

if (numero === 0) {
    fatorial = 1;
} else {
    for (let i = numero; i > 1; i--) {
        fatorial = fatorial * i;
        console.log(`${i} -> fatorial = ${fatorial}`);
    }
}

console.log(`\n${numero}! = ${fatorial}`);
