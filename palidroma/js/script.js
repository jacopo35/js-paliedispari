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


