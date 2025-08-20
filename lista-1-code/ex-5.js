const input = require ('readline-sync')
let numero1 = input.questionInt ("Digite o primeiro numero: ");
let numero2 = input.questionInt ("Digite o segundo numero: ");

let resultado = (numero1 - numero2) + 10; 

console.log ("O resultado da operação é:", resultado);
