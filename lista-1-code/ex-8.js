const input = require ('readline-sync')

let numero1 = input.questionInt('Digite o primeiro numero: ');
let numero2 = input.questionInt ('Digite o segundo numero: ');
let numero3 = input.questionInt ('Digite o terceiro numero: ');

let resultado1 = numero1 + 10;
let resultado2 = numero2 - 5;
let resultado3 = numero3 * 2; 

console.log('O primeiro resultado é: ', resultado1);
console.log('O segundo resultado é:', resultado2);
console.log('O terceiro resultado é', resultado3);




