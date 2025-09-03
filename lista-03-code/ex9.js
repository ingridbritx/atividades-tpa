import input from 'readline-sync'
 
let num = input.questionInt("Digite um número:")
 
let resp = num / 2
 
if(resp>20){
    console.log("O resultado é:", resp)
}