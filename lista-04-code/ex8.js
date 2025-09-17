import input from 'readline-sync'

let n = input.questionInt ("Digite um número: ")

if (n > 10) {
    n += 5
} else {
    n += 20
}

if (n > 25) {
    console.log("Resultado maior que 25")
} else {
    console.log("Resultado menor ou igual a 25")
}