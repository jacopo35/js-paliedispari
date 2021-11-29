/* Palidroma
   Chiedere all’utente di inserire una parola
   Creare una funzione per capire se la parola inserita è palindroma
   (prima senza funzione e poi con funzione).
*/

function reverseStr(string) {
 let reverseString = "";
 for (let i = string.length - 1; i >= 0; i--) {
      reverseString += string[i];
   }
 return reverseString;
}

let string = prompt('Inserisci una parola');


//Mostrare la parola al contrario:

console.log('parola scelta: ' + string);
console.log('parola al contrario: ' + reverseStr(string));

//SE uguali allora:

if (string == reverseStr(string)) {
   console.log('La parola ' + string + ' è palindroma.');
} else { //altrimenti:
   console.log('La parola ' + string + ' non è palindroma.');
}