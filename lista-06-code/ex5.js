let a = 4, b = 15, c = 9;

let numeros = [a, b, c].sort((x, y) => y - x); // ordena do maior para o menor
let maior1 = numeros[0];
let maior2 = numeros[1];

for (let i = maior2; i <= maior1; i++) {
  console.log(i);
}
