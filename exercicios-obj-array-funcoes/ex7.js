const carrinho = [
  { nome: "Arroz", quantidade: 2, preco: 20 },
  { nome: "Feijão", quantidade: 1, preco: 8 },
  { nome: "Leite", quantidade: 3, preco: 4.5 }
];

function calcularTotalCarrinho(itens) {
  let total = 0;

  for (let item of itens) {
    total += item.quantidade * item.preco;
  }

  return total;
}

// exemplo:
console.log(calcularTotalCarrinho(carrinho)); // 61.5
