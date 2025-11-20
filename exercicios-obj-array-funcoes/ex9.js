const conta = {
  agencia: "1234",
  numero: "56789-0",
  senha: "1234",
  saldo: 1000,
  historico: []
};

function validarAcesso(agencia, numero, senha) {
  return (
    agencia === conta.agencia &&
    numero === conta.numero &&
    senha === conta.senha
  );
}

function exibirSaldo() {
  return `Saldo atual: R$ ${conta.saldo.toFixed(2)}`;
}

function sacar(valor) {
  if (valor <= 0) {
    return "Valor inválido.";
  }

  if (valor > conta.saldo) {
    return "Saldo insuficiente.";
  }

  // calcula notas (100, 50, 20, 10)
  let restante = valor;
  const notas = { 100: 0, 50: 0, 20: 0, 10: 0 };

  const valoresNotas = [100, 50, 20, 10];

  for (let nota of valoresNotas) {
    while (restante >= nota) {
      notas[nota]++;
      restante -= nota;
    }
  }

  // atualiza saldo e histórico
  conta.saldo -= valor;
  conta.historico.push({ tipo: "saque", valor });

  let mensagemNotas = "Cédulas entregues:\n";
  for (let nota in notas) {
    if (notas[nota] > 0) {
      mensagemNotas += `${notas[nota]} x R$ ${nota}\n`;
    }
  }

  return mensagemNotas + "\n" + exibirSaldo();
}

// exemplo de uso:
console.log(validarAcesso("1234", "56789-0", "1234")); // true
console.log(exibirSaldo());
console.log(sacar(280));
