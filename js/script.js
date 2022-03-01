/* PALINDROMA */

/*
let nome = prompt("Ciao! Inserisci una parola ed io ti dirò se è palindroma o no!");
let risultato = document.getElementById("stampa");
let parolaSplit = nome.split("");
let parola = parolaSplit.join();
let parolaInversa = parolaSplit.reverse();
let parolaInvertita = parolaInversa.join();


if (parola.toLowerCase == parolaInvertita.toLowerCase){
    risultato.innerHTML = (`Ottimo! "${nome}" è una parola palindroma!`)
} else {
    risultato.innerHTML = (`No, "${nome}" non è una parola palindroma.`)
}
*/

/* PARI E DISPARI */

function isEven(testNumber) {
    alert(testNumber);
}


let pariDispari = parseInt(prompt("Scelga pari o dispari, in un numero compreso da 1 a 5"));

if ( pariDispari < 1 || pariDispari > 5){
    isEven("Spiacente, il numero non è compreso tra 1 e 5");
} else if (pariDispari % 2 == 0){
    isEven("Il numero è pari");
} else if (pariDispari % 2 == 1) {
    isEven("Il numero è dispari");
} else{
    isEven("Inserisca un numero");
}












