// Exercício 1
function somaArray(numeros) {
  let total = 0;
  for (const n of numeros) {
    total += n;
  }
  return total;
}

// Exercício 2
function aprovados(alunos) {
  const nomes = [];
  for (const aluno of alunos) {
    if (aluno.nota >= 6) {
      nomes.push(aluno.nome);
    }
  }
  return nomes;
}

// Exercício 3
function contarItens(pedido) {
  const resumo = {};
  for (const item of pedido) {
    if (resumo[item.nome]) {
      resumo[item.nome].quantidade += 1;
    } else {
      resumo[item.nome] = { quantidade: 1 };
    }
  }
  return resumo;
}
