console.clear();
var teclado = require("prompt-sync")();
console.log("______________________________________");
console.log("| Digite qual opera\u00E7\u00E3o deseja fazer? |");
console.log("|          Para soma digite 1        |");
console.log("|       Para subtra\u00E7\u00E3o digite 2      |");
console.log("|     Para multiplica\u00E7\u00E3o digite 3    |");
console.log("|       Para divis\u00E3o digite 4        |");
console.log("|     Para potencia\u00E7\u00E3o digite 5      |");
console.log("|    Para raiz quadrada digite 6     |");
console.log("|____________________________________|");
var perguntaInicial = parseFloat(teclado("Digite: "));
if (perguntaInicial == 1) {
    console.clear();
    var n1 = parseFloat(teclado("Some:"));
    var n2 = parseFloat(teclado("Com:"));
    var total = (n1 + n2);
    console.log("Resultado: " + total);
}
else if (perguntaInicial == 2) {
    console.clear();
    var n1 = parseFloat(teclado("Subtraia:"));
    var n2 = parseFloat(teclado("Com:"));
    var total = (n1 - n2);
    console.log("Resultado: " + total);
}
else if (perguntaInicial == 3) {
    console.clear();
    var n1 = parseFloat(teclado("Multiplique:"));
    var n2 = parseFloat(teclado("por:"));
    var total = (n1 * n2);
    console.log("Resultado: " + total);
}
else if (perguntaInicial == 4) {
    console.clear();
    var n1 = parseFloat(teclado("Divida:"));
    var n2 = parseFloat(teclado("por:"));
    var total = (n1 / n2);
    console.log("Resultado: " + total);
}
else if (perguntaInicial == 5) {
    console.clear();
    var n1 = parseFloat(teclado("Elevar:"));
    var n2 = parseFloat(teclado("por:"));
    var total = (Math.pow(n1, n2));
    console.log("Resultado: " + total);
}
else if (perguntaInicial == 6) {
    console.clear();
    var n1 = parseFloat(teclado("Encontrar raiz quadrada de: "));
    var total = Math.sqrt(n1);
    console.log("Resultado: " + total);
}
else {
    console.log("Algo deu errado!!");
}
