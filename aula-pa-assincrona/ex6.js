//6️⃣ Média de Notas Peça a quantidade de alunos e, para cada um, leia 3 notas. Mostre a média e indique se foi aprovado (média ≥ 7).


const input = require("readline-sync");

let qtdAlunos = input.questionInt("Quantos alunos tem na turma? ");

for (let aluno = 0; aluno <qtdAlunos; aluno++) {

    console.log("=================");
    console.log("     Aluno: " + aluno + 1);
    console.log("=================");
    let somaNotas = 0;
    for (let prova = 0; prova < 3; prova++) {
        let nota = input.questionInt(`Digite a nota da - prova -  ${prova + 1}`);
        somaNotas+=nota
    }
    let media = somaNotas/3;
    if (media>=7){
        console.log("Aluno - ", aluno + 1, "Media = ", media, "## APROVADO ##");   
    } else {
        console.log("Aluno - ", aluno + 1, "Media = ", media, "## REPROVADO ##");   
    }
} 