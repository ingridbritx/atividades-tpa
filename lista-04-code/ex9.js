import input from 'readline-sync'

let n1 = input.questionInt("Digite o primeiro número: ")
let n2 = input.questionInt("Digite o segundo número: ")
let n3 = input.questionInt("Digite o terceiro número: ")
let n4 = input.questionInt("Digite o quarto número: ")

let soma = n1 + n2
let sub = n3 - n4 
let Resultado = soma + sub

if (Resultado > 10) {
    console.log("Resultado maior que dez")
} else {
    console.log("Resultado menor ou igual a dez")
}