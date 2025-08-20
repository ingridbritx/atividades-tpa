const input = require ('readline-sync')
let numero1 = input.questionInt ("Digite o primeiro numero: ");
let numero2 = input.questionInt ("Digite o segundo numero: ");

let resultado1 = numero1 - 3;
let resultado2 = numero2 +2;
let soma = resultado1 + resultado2;
let final = soma - 1; 

console.log("O resultado final é:", final);


