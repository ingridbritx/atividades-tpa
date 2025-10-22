//8️⃣ Senha Correta Solicite uma senha até que o usuário digite "1234". Quando acertar, mostre “Acesso permitido”.

const input = require("readline-sync");

let senha = "";

while (senha !== "1234") {
    senha = input.question("Digite sua senha: ");
}

console.log("============================");
console.log("        Acesso permitido!");
console.log("============================");
