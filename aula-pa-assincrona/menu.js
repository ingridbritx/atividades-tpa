// DESAFIO FINAL — MENU DE OPÇÕES (1 a 14)

const input = require("readline-sync");

// ===== 1) Contagem Simples
function ex1() {
    console.log("Mostre todos os números de 1 até 20");
    for (let numero = 1; numero <= 20; numero++) {
        console.log("o numero = ", numero);
    }
    console.log("-");
}

// ===== 2) Pares e Ímpares
function ex2() {
    let limite = input.questionInt("Digite o número final: ");
    console.log("Números pares e ímpares até", limite);
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log(i, "- Par");
        } else {
            console.log(i, "- Ímpar");
        }
    }
    console.log("-");
}

// ===== 3) Soma dos Números
function ex3() {
    let soma = 0;
    for (let contador = 0; contador < 5; contador++) {
        let numero = input.questionInt("Digite o " + (contador + 1) + " º numero: ");
        soma = soma + numero;
    }
    console.log("Soma total =", soma);
}

// ===== 4) Contador Regressivo
function ex4() {
    let numero = input.questionInt("Digite um número para contagem regressiva: ");
    for (let cont = numero; cont >= 0; cont--) {
        console.log(cont);
    }
}

// ===== 5) Tabuada
function ex5() {
    let numero = input.questionInt("Digite um número para ver sua tabuada: ");
    console.log("----- tabuada do ", numero, "-----");
    for (let i = 1; i <= 10; i++) {
        console.log(i + " x " + numero + " = " + i * numero);
    }
    console.log("---------------");
}

// ===== 6) Média de Notas
function ex6() {
    let qtdAlunos = input.questionInt("Quantos alunos tem na turma? ");

    for (let aluno = 0; aluno < qtdAlunos; aluno++) {
        console.log("=================");
        console.log("     Aluno: " + aluno + 1);
        console.log("=================");
        let somaNotas = 0;
        for (let prova = 0; prova < 3; prova++) {
            let nota = input.questionInt(`Digite a nota da - prova -  ${prova + 1}`);
            somaNotas += nota;
        }
        let media = somaNotas / 3;
        if (media >= 7) {
            console.log("Aluno - ", aluno + 1, "Media = ", media, "## APROVADO ##");
        } else {
            console.log("Aluno - ", aluno + 1, "Media = ", media, "## REPROVADO ##");
        }
    }
}

// ===== 7) Maior e Menor Número (versão corrigida que alinhamos)
function ex7() {
    let numero = -1;
    let maior = null;
    let menor = null;

    while (numero !== 0) {
        numero = input.questionInt("Digite um numero (0 para sair): ");
        if (numero !== 0) {
            if (maior === null || numero > maior) {
                maior = numero;
            }
            if (menor === null || numero < menor) {
                menor = numero;
            }
        }
    }
    if (maior === null) {
        console.log("Usuário não digitou números.");
    } else {
        console.log(`O maior número é: ${maior}`);
        console.log(`O menor número é: ${menor}`);
    }
}

// ===== 8) Senha Correta (versão corrigida que alinhamos)
function ex8() {
    let senha = "";
    while (senha !== "1234") {
        senha = input.question("Digite sua senha: ");
    }
    console.log("============================");
    console.log("        Acesso permitido!");
    console.log("============================");
}

// ===== 9) Contar Vogais (versão corrigida que alinhamos)
function ex9() {
    const palavra = input.question("Digite uma palavra: ").toLowerCase();
    let contadorVogais = 0;

    for (let i = 0; i < palavra.length; i++) {
        let letra = palavra[i];
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            contadorVogais++;
        }
    }
    console.log(`A palavra "${palavra}" tem ${contadorVogais} vogais.`);
}

// ===== 10) Fatorial (versão corrigida que alinhamos)
function ex10() {
    let numero = input.questionInt("Digite um numero: ");
    let fatorial = 1;
    if (numero === 0) {
        fatorial = 1;
    } else {
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
    }
    console.log(`${numero}! = ${fatorial}`);
}

// ===== 11) Sequência de Fibonacci (versão corrigida que alinhamos)
function ex11() {
    let numero = input.questionInt("Digite a quantidade de termos da sequência de Fibonacci: ");
    let a = 1;
    let b = 1;
    console.log("Sequência de Fibonacci:");
    if (numero >= 1) {
        console.log(a);
    }
    if (numero >= 2) {
        console.log(b);
    }
    for (let i = 3; i <= numero; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

// ===== 12) Número Primo (com o console.log final que completamos)
function ex12() {
    let numero = input.questionInt("Digite um numero: ");

    let ehPrimo = true;  //Assumiremos que todos são primos 

    if (numero <= 1) {
        ehPrimo = false; //0 e 1 não são primos; 
    } else {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }
    }

    if (ehPrimo) {
        console.log(numero, "é um número primo!");
    } else {
        console.log(numero, "não é um número primo!");
    }
}

// ===== 13) Estatísticas (versão corrigida que alinhamos)
function ex13() {
    let numero = -1;
    let soma = 0;
    let cont = 0;
    let media = 0;
    let maior = null;
    let menor = null;

    while (numero !== 0) {
        numero = input.questionInt("Digite um número (0 para sair): ");
        if (numero !== 0) {
            soma = soma + numero;
            cont++;
            if (menor === null || numero < menor) {
                menor = numero;
            }
            if (maior === null || numero > maior) {
                maior = numero;
            }
        }
    }

    if (cont > 0) {
        media = soma / cont;
        console.log("\n=== Estatísticas ===");
        console.log("Quantidade", cont);
        console.log("Media", media);
        console.log("Maior", maior);
        console.log("Menor", menor);
    } else {
        console.log("Nenhum número foi digitado.");
    }
}

// ===== 14) Caixa de Loja
function ex14() {
    let totalPagar = 0;
    let valor = -1;

    while (valor != 0) {
        valor = input.questionFloat("Digite um número (0 para sair): R$ ");
        totalPagar = totalPagar + valor;
    }

    console.log("Total a pagar: R$ ", totalPagar.toFixed(2));
}

// =============================
//       MENU PRINCIPAL
// =============================
let opcao = -1;

while (opcao !== 0) {
    console.log(`
===============================
          MENU DE OPÇÕES
===============================
1  - Contagem Simples
2  - Pares e Ímpares
3  - Soma dos Números
4  - Contador Regressivo
5  - Tabuada
6  - Média de Notas
7  - Maior e Menor Número
8  - Senha Correta
9  - Contar Vogais
10 - Fatorial
11 - Sequência de Fibonacci
12 - Número Primo
13 - Estatísticas
14 - Caixa de Loja
0  - Sair
===============================
    `);

    opcao = input.questionInt("Escolha uma opção: ");
    console.log(); // espaço

    switch (opcao) {
        case 1:  ex1(); break;
        case 2:  ex2(); break;
        case 3:  ex3(); break;
        case 4:  ex4(); break;
        case 5:  ex5(); break;
        case 6:  ex6(); break;
        case 7:  ex7(); break;
        case 8:  ex8(); break;
        case 9:  ex9(); break;
        case 10: ex10(); break;
        case 11: ex11(); break;
        case 12: ex12(); break;
        case 13: ex13(); break;
        case 14: ex14(); break;
        case 0:
            console.log("Programa encerrado!");
            break;
        default:
            console.log("❌ Opção inválida, tente novamente!");
    }

    console.log("\n-------------------------------\n");
}
