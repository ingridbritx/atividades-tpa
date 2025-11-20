const jogadores = [
  { nome: "Ana", pontos: 120 },
  { nome: "Bruno", pontos: 300 },
  { nome: "Carlos", pontos: 250 }
];

function ordenarRanking(lista) {
  // cria uma cópia pra não mexer no original
  const copia = [...lista];

  // ordena do maior para o menor
  copia.sort(function (a, b) {
    return b.pontos - a.pontos;
  });

  return copia;
}

// exemplo:
console.log(ordenarRanking(jogadores));
