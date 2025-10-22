//5️⃣ Tabuada Mostre a tabuada de um número informado pelo usuário (de 1 a 10).

const input = require("readline-sync")

let numero = input.questionInt("Digite um número para ver sua tabuada: ");
console.log ("----- tabuada do " , numero, "-----");
for (let i = 1; i <= 10; i++) {
    console.log(i + " x " + numero + " = " + i * numero); 
}
console.log("---------------");