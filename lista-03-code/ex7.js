import input from 'readline-sync'
 
let num1 = input.questionInt("Digite o 1° Número:")
let num2 = input.questionInt("Digite o 2° Número:")
let num3 = input.questionInt("Digite o 3° Número:")
 
let resp = num1+num2+num3
 
if(resp>20){
    console.log("O resultado é:", resp)
}