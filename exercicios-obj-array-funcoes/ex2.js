const produtos = [
  { nome: "Mouse", preco: 40 },
  { nome: "Teclado", preco: 120 },
  { nome: "Fone", preco: 80 }
];

function filtrarProdutosCaros(lista) {
  // pega só os produtos com preço > 50
  const resultado = [];
  for (let item of lista) {
    if (item.preco > 50) {
      resultado.push(item);
    }
  }
  return resultado;
}

// exemplo:
console.log(filtrarProdutosCaros(produtos));
