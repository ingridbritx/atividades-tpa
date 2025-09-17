import input from 'readline-sync'

let n1 = input.questionInt("Digite o primeiro número: ")
let n2 = input.questionInt("Digite o segundo número: ")

if (n1 < n2) {
    n1 += 5
} else {
    n2 += 5
}

if (n1 >n2) {
    console.log("O maior valor é:", n1)
} else {
    console.log("O maior valor é:", n2)
}