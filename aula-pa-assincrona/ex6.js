const input = require("readline-sync");

let qtdAlunos = input.questionInt("Quantos alunos tem na turma? ");

for (let i = 1; i <= qtdAlunos; i++) {
    let somaNotas = 0;

    for (let j = 1; j <= 3; j++) {
        let nota = input.questionFloat(`Aluno ${i} - Digite a ${j}ª nota: `);
        somaNotas += nota;
    }

    let media = somaNotas / 3;
    console.log(`Média do aluno ${i}: ${media.toFixed(2)} (${media >= 7 ? "Aprovado" : "Reprovado"})`);
    console.log("-");
}
