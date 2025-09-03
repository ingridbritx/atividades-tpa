import input from 'readline-sync'
 
let num1 = input.questionInt("Digite um número:")
 
let resp = num1 * 3;
 
if(resp>15){
    console.log("O resultado é:", resp)
}