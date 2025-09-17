import input from 'readline-sync'

let num = input.questionInt("Digite um número: ")

if (num > 10) {
    console.log("Número maior que dez")
} else {
    console.log("Número menor ou igual a dez")
}