import input from 'readline-sync'
 
let num1 = input.questionInt("Digite o 1° Número:")
let num2 = input.questionInt("Digite o 2° Número:")
let num3 = input.questionInt("Digite o 3° Número:")
 
let resp1 = num1 + 5
let resp2 = num2 + 5
let resp3 = num3 + 5
 
if(resp1>10, resp2>10, resp3>10){
    console.log("O resultado é:", resp1, "O resultado do segundo número:", resp2, "O resultado do terceiro número:", resp3)
}
 