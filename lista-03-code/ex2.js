import input from 'readline-sync'
 
let num1 = input.questionInt("Digite um número:")
 
let resp = num1 + 5;
 
if(resp>10){
    console.log("Resultado:", resp)
}