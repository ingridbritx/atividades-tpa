import input from 'readline-sync'
 
let Tabuada = input.questionInt("Digite um número:")
 
if(Tabuada<10){
console.log("-----------",Tabuada,"-----------");
console.log('1 x', Tabuada, "=", Tabuada * 1);
console.log('2 x', Tabuada, "=", Tabuada * 2);
console.log('3 x', Tabuada, "=", Tabuada * 3);
console.log('4 x', Tabuada, "=", Tabuada * 4);
console.log('5 x', Tabuada, "=", Tabuada * 5);
console.log('6 x', Tabuada, "=", Tabuada * 6);
console.log('7 x', Tabuada, "=", Tabuada * 7);
console.log('8 x', Tabuada, "=", Tabuada * 8);
console.log('9 x', Tabuada, "=", Tabuada * 9);
console.log('10 x', Tabuada, "=", Tabuada * 10);
}