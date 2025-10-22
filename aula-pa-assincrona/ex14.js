//1️⃣4️⃣ Caixa de Loja Peça o valor das compras até o cliente digitar 0. No final, mostre o total a pagar.

const input = require("readline-sync");

let totalPagar = 0;
let valor = -1;

while(valor != 0){
    valor = input.questionFloat("Digite um número (0 para sair): R$ ");
    totalPagar = totalPagar + valor;    
}

console.log("Total a pagar: R$ ", totalPagar.toFixed(2));

