const input = require("readline-sync")

let n = input.questionInt("Digite um número para ver sua tabuada: ");
console.log (`Tabuada do ${n}: `);
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`); 
}
console.log("-");