const pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "João", idade: 22 },
  { nome: "Maria", idade: 30 }
];

function filtrarMaioresDeIdade(lista) {
  const resultado = [];
  for (let pessoa of lista) {
    if (pessoa.idade > 18) {
      resultado.push(pessoa);
    }
  }
  return resultado;
}

// exemplo:
console.log(filtrarMaioresDeIdade(pessoas));
