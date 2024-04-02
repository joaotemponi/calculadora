console.clear();
const teclado = require(`prompt-sync`)();

console.log(`______________________________________`);
console.log(`| Digite qual operação deseja fazer? |`);
console.log(`|          Para soma digite 1        |`);
console.log(`|       Para subtração digite 2      |`);
console.log(`|     Para multiplicação digite 3    |`);
console.log(`|       Para divisão digite 4        |`);
console.log(`|     Para potenciação digite 5      |`);
console.log(`|    Para raiz quadrada digite 6     |`);
console.log(`|____________________________________|`);

var perguntaInicial : number = parseFloat(teclado(`Digite: `));

if( perguntaInicial == 1){
    console.clear();
    let n1 : number = parseFloat(teclado(`Some:`));
    let n2 : number = parseFloat(teclado(`Com:`));
    let total : number = (n1 + n2);
    console.log(`Resultado: ${total}`);
}
else if(perguntaInicial == 2){
    console.clear();
    let n1 : number = parseFloat(teclado(`Subtraia:`));
    let n2 : number = parseFloat(teclado(`Com:`));
    let total : number = (n1 - n2);
    console.log(`Resultado: ${total}`);
}
else if(perguntaInicial == 3){
    console.clear();
    let n1 : number = parseFloat(teclado(`Multiplique:`));
    let n2 : number = parseFloat(teclado(`por:`));
    let total : number = (n1 * n2);
    console.log(`Resultado: ${total}`);
}
else if(perguntaInicial == 4){
    console.clear();
    let n1 : number = parseFloat(teclado(`Divida:`));
    let n2 : number = parseFloat(teclado(`por:`));
    let total : number = (n1 / n2);
    console.log(`Resultado: ${total}`);
}
else if(perguntaInicial == 5){
    console.clear();
    let n1 : number = parseFloat(teclado(`Elevar:`));
    let n2 : number = parseFloat(teclado(`por:`));
    let total : number = (n1 ** n2);
    console.log(`Resultado: ${total}`);
}
else if(perguntaInicial == 6){
    console.clear();
    let n1 : number = parseFloat(teclado(`Encontrar raiz quadrada de: `));
    let total : number = Math.sqrt(n1);
    console.log(`Resultado: ${total}`);
}
else{
    console.log(`Algo deu errado!!`);
}

