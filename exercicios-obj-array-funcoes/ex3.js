function calcularMedia(notas) {
  if (notas.length === 0) return 0; // evita divisão por zero

  let soma = 0;
  for (let nota of notas) {
    soma += nota;
  }
  return soma / notas.length;
}

// exemplo:
console.log(calcularMedia([7, 8.5, 10])); // 8.5
