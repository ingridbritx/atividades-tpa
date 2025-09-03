import input from 'readline-sync'
 
let num1 = input.questionInt("Digite um número:")
 
let resp = num1 - 10;
 
if(resp>3){
    console.log("Resultado:", resp)
}