import input from 'readline-sync'
 
let num = input.questionInt("Digite um número:")
 
if(num<5){
    console.log("O seu número:", num)
}