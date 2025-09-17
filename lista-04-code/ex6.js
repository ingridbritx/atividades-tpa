import input from 'readline-sync'

let n1 = input.questionInt("Digite o primeiro número: ")
let n2 = input.questionInt("Digite o segundo número:")

if (n1 < n2) {
    console.log(n1, "-", n2)
} else {
    console.log(n2, "-", n1)
}
