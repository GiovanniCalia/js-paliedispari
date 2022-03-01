/* PALINDROMA */

/*
function word(testWord) {
    risultato.innerHTML = testWord;
}

let nome = prompt("Ciao! Inserisci una parola ed io ti dirò se è palindroma o no!");
let risultato = document.getElementById("stampa");
let parolaSplit = nome.split("");
let parola = parolaSplit.join();
let parolaInversa = parolaSplit.reverse();
let parolaInvertita = parolaInversa.join();
console.log(parola);
console.log(parolaInvertita)


if (parola == parolaInvertita){
    word(`Ottimo! "${nome}" è una parola palindroma!`)
} else {
    word(`No, "${nome}" non è una parola palindroma.`)
}
/*


/* PARI E DISPARI */

let randomNumber = generateRandomBetween(1, 5);

function generateRandomBetween(min, max){
const random = Math.floor(Math.random() *  (max - min + 1)) + min;
return random;
}

function isEven(testNumber) {
    risultato.innerHTML = testNumber;
}

let risultato = document.getElementById("stampa");
let pariDispari = parseInt(prompt("Scelga pari o dispari, in un numero compreso da 1 a 5"));
//let randomNumber = Math.floor(Math.random() *  (5 - 1 + 1)) + 1;
let somma = pariDispari + randomNumber;

if ( pariDispari < 1 || pariDispari > 5){
    isEven("Spiacente, il numero non è compreso tra 1 e 5");
} else if (pariDispari % 2 == 0){
    isEven("Il numero è pari");
} else if (pariDispari % 2 == 1) {
    isEven("Il numero è dispari");
} else{
    isEven("Inserisca un numero");
}

console.log(randomNumber)
console.log(somma)












