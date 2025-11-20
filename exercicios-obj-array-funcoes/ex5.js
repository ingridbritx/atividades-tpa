function contarOcorrencias(array) {
  const contagem = {};

  for (let item of array) {
    if (contagem[item]) {
      contagem[item]++;   // já existia, soma 1
    } else {
      contagem[item] = 1; // primeira vez que aparece
    }
  }

  return contagem;
}

// exemplo:
console.log(contarOcorrencias(["a", "b", "a", "c", "b", "a"]));
// saída: { a: 3, b: 2, c: 1 }
