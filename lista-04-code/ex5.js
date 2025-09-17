import input from 'readline-sync'

let n1 = input.questionInt("Digite o primeiro número: ")
let n2 = input.questionInt("Digite o segundo número: ")
let n3 = input.questionInt("Digite o terceiro número: ")

let menor = n1 

if (n2 < menor) {
    menor = n2
}

if (n3 < menor) {
    menor = n3 
}

menor += 5 

console.log("Resultado:", menor)
