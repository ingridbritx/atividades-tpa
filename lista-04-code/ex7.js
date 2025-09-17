import input from 'readline-sync'

let n1 = input.questionInt("Digite o primeiro número: ")
let n2 = input.questionInt("Digite o segundo número: ")
let n3 = input.questionInt("Digite o terceiro número: ")

let ordem = [n1,n2,n3]

ordem.sort((a, b) => a - b)

console.log("Ordem crescente:", ordem)
