/* Pari e Dispari
   L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
   Generiamo un numero random(sempre da 1 a 5) per il computer
   Sommiamo i due numeri
   Stabiliamo se la somma dei due numeri è pari o dispari
   Dichiariamo chi ha vinto
   (corrispondenza tra scelta pari e dispari e somma pari o dispari)
   In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari.
*/

//Prima funzione per creare numeri random:

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Seconda funzione per vedere se il numero è pari:

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let user = prompt('Scrivi pari o dispari');

while (user != "pari" && user != "dispari") {
    user = prompt('Scrivi pari o dispari');
}

let numberUser = parseInt(prompt('Inserisci un numero da 1 a 5'));

while (numberUser < 0 || numberUser > 5) {
    numberUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
}

//Creare un numero a caso e sommarlo con il numero dell'utente:

let numberPc = randNum(1, 5);
let sum = numberUser + numberPc;

//Mostrare le scelte dell'utente, il numero a caso e la somma:

 console.log('Utente: ' + user);
 console.log('Nome scelto da utente: ' + numberUser);
 console.log('Nome random del PC: ' + numberPc);
 console.log('Somma: ' + sum);

//Controllare chi ha vinto:

if (isEven(sum) == true && user == "pari" || isEven(sum) == false && user == "dispari") {
    console.log('Ha vinto utente');
} else {
    console.log('Ha vinto il PC');
}