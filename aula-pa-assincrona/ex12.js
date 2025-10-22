//1️⃣2️⃣ Número Primo Verifique se um número informado é primo (divisível apenas por 1 e ele mesmo).

const input = require("readline-sync");

let numero = input.questionInt("Digite um numero: ");

let ehPrimo = true;  //Assumiremos que todos são primos 

if(numero <=1){
    ehPrimo=false; //0 e não são primos; 
}else{
    for(let i = 2; i<numero; i++){
        if(numero%i === 0){
            ehPrimo = false;
            break;
        } 
    }
}

if (ehPrimo){
    console.log(`${numero} é primo.`);
} else {
    console.log(`${numero} não é primo.`); 
}