let n1 = 4, n2 = 15, n3 = 9;

let numeros = [n1, n2, n3].sort((x, y) => y - x); // ordena do maior para o menor
let maior1 = numeros[0];
let maior2 = numeros[1];

for (let i = maior2; i <= maior1; i++) {
  console.log(i);
}

