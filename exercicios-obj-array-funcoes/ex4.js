const nomes = ["Ana", "João", "Maria", "Pedro"];

function existeNome(lista, nomeProcurado) {
  for (let nome of lista) {
    if (nome === nomeProcurado) {
      return true;
    }
  }
  return false;
}

// exemplo:
console.log(existeNome(nomes, "Maria")); // true
console.log(existeNome(nomes, "Carlos")); // false
