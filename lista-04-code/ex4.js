import input from 'readline-sync'

let n1 = input.questionInt("Digite o primeiro número: ")
let n2 = input.questionInt("Digite o segundo número: ")
let n3 = input.questionInt("Digite o terceiro número: ")

let maior = n1 

if (n2> maior) {
    maior = n2
}
if (n3 > maior) {
    maior =n3 
}

console.log("O maior número é:", maior)