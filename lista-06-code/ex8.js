let numero = 4;

if (numero < 5) {
  for (let i = numero; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
} else {
  console.log("Número inválido (deve ser menor que 5).");
}
