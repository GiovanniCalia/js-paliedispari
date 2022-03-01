/* PALINDROMA */

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

/* PARI E DISPARI */

const pariDispari = prompt("Scegli pari o dispari")
    switch (pariDispari){
        case "pari":     
    }











