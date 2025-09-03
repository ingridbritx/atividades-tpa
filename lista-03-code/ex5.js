import input from 'readline-sync'
 
let num1 = input.questionInt("Digite o 1° Número:");
let num2 = input.questionInt("Digite o 2° Número:");
 
let resp1 = num1 * 10;
let resp2 = num2 * 10;
 
if(num1+num2>20){
    console.log("O resultado do primeiro número:", resp1, "O resultado do segundo número:", resp2)
}