//9️⃣ Contar Vogais Peça uma palavra e conte quantas vogais ela tem.

const { question } = require("readline-sync");

const palavra = question("Digite uma palavra: ").toLowerCase();
let contadorVogais = 0;

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        contadorVogais++;
    }
}

console.log(`A palavra "${palavra}" tem ${contadorVogais} vogais.`);

