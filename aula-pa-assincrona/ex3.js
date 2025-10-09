const input = require("readline-sync")

let soma = 0; 

for (let i = 1; i <=5; i++) {
    let num = input.questionFloat(`Digite o ${i}º número: `);
    soma += num;
}

console.log("Soma total =", soma);
console.log("-")
