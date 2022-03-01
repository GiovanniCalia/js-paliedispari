/* PALINDROMA */

let nome = prompt("Ciao! Inserisci una parola ed io ti dirò se è palindroma o no!");
let risultato = document.getElementById("stampa");
let parola = nome.split("");
let parola2 = parola.join();
let parolaInversa = parola.reverse();
let parolaInvertita = parolaInversa.join();
console.log(parola2);
console.log(parolaInvertita)


if (parola2 == parolaInvertita){
    risultato.innerHTML = (`Ottimo! "${nome}" è una parola palindroma!`)
} else {
    risultato.innerHTML = (`No, "${nome}" non è una parola palindroma.`)
}






