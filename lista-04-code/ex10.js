import input from 'readline-sync'

let n1 = input.questionInt("Digite o primeiro número: ")
let n2 = input.questionInt("Digite o segundo número:" )

let menor, maior 

if (n1 < n2) {
    menor = n1
    maior = n2
} else {
    menor = n2
    maior = n1
}

let resultado = (menor * 10) + (maior /2 )

if (resultado % 2 === 0) {
    console.log("O resultado é par")
} else {
    console.log("O resultado é ímpar")
}