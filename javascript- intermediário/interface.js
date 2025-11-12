import { resumoPedido, adicionarAoPedido, listarProdutos } from "./loja.js";
import input from "readline-sync";

// menu
function mostrarMenu() {
  console.log(`
=========== Menu ============
1 - Listar produtos
2 - Adicionar produto
3 - Mostrar resumo do pedido
4 - Sair
=============================
`);
  const opcao = input.questionInt("Escolha uma opção: ");
  return opcao;
}

function main() {
  let sair = false;
  while (!sair) {
    const opcao = mostrarMenu();
    console.clear();
    switch (opcao) {
      case 1:
        listarProdutos();
        break;
      case 2: {
        const id = input.questionInt("Digite o código do produto: ");
        const qtd = input.questionInt("Digite a quantidade: ");
        adicionarAoPedido(id, qtd);
        break;
      }
      case 3:
        resumoPedido();
        break;
      case 4:
        sair = true;
        console.log("====================================");
        console.log("Sistema encerrado com sucesso");
        console.log("====================================");
        break;
      default:
        console.log("Opção inválida!");
    }
  }
}

main();
