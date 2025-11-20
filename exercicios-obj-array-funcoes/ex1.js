// objeto aluno
const aluno = {
  nome: "Ingrid",
  idade: 28,
  curso: "Desenvolvimento de Sistemas"
};

// função que recebe um aluno e monta a frase
function apresentarAluno(al) {
  return `O aluno ${al.nome} tem ${al.idade} anos e faz o curso de ${al.curso}.`;
}

// exemplo de uso:
console.log(apresentarAluno(aluno));
