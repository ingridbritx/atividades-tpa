// Produtos disponíveis (array de objetos)
const produtos = [
  { id: 1, nome: "Coxinha",      preco: 6.0 },
  { id: 2, nome: "Pastel",       preco: 5.0 },
  { id: 3, nome: "Refrigerante", preco: 8.0 },
  { id: 4, nome: "Suco",         preco: 8.0 },
];

// Array de pedidos (vazio)
let pedido = [];

// Utilitário para BRL
function brl(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Função: listar todos os produtos
export function listarProdutos() {
  console.log("=== Cardápio ===");
  for (const produto of produtos) {
    console.log(`#${produto.id} - ${produto.nome} - ${brl(produto.preco)}`);
  }
  console.log("================");
}

// Função: adicionar ao pedido por id
export function adicionarAoPedido(id, quantidade = 1) {
  for (const produto of produtos) {
    if (id === produto.id) {
      for (let i = 0; i < quantidade; i++) {
        // Nota: estamos empilhando referências do mesmo objeto.
        // Para este exercício, está OK; para sistemas maiores,
        // prefira guardar { id, nome, preco, quantidade }.
        pedido.push(produto);
      }
      console.log(`${quantidade} x ${produto.nome} adicionados ao pedido.`);
      return;
    }
  }
  console.log("Produto não encontrado!");
}

// Função: mostrar resumo do pedido
export function resumoPedido() {
  const resumo = {};
  console.log("======= Resumo =======");

  // Agrupar por nome (for...of para valores)
  for (const item of pedido) {
    if (resumo[item.nome]) {
      resumo[item.nome].quantidade += 1;
      resumo[item.nome].subtotal += item.preco;
    } else {
      resumo[item.nome] = { quantidade: 1, subtotal: item.preco };
    }
  }

  // Percorrer propriedades do objeto resumo (for...in para chaves)
  for (const nome in resumo) {
    const info = resumo[nome];
    console.log(`${nome} - ${info.quantidade}x - Subtotal: ${brl(info.subtotal)}`);
  }

  // Calcular total
  let total = 0;
  for (const item of pedido) {
    total += item.preco;
  }
  console.log(`Total: ${brl(total)}`);
  console.log("======================");
}
