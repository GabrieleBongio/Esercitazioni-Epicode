/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

var num1 = 10;
var num2 = 14;
if ( num1 > num2 ) {
  console.log(num1)
} else {
  console.log(num2)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

var num3 = 7;
if ( num3 !== 5 ) {
  console.log("not equal")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var num4 = 20
if ( num4 % 5 == 0) {
  console.log("divisibile per 5")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

var num5 = 6;
var num6 = 2;
if ((num5 == 8) || (num6 == 8) || (num5 + num6 == 8) || (num5 - num6 == 8) || (num6 - num5 == 8)) {
  console.log(true)
} 

if (num5 == 8) {
  console.log("il primo numero è uguale a 8")
} else if (num6 == 8) {
  console.log("il secondo numero è uguale a 8")
} else if (num5 + num6 == 8) {
  console.log("la somma dei due numeri è 8")
} else if (num5 - num6 == 8) {
  console.log("la differenza tra primo e secondo è 8")
} else if (num6 - num5 == 8) {
  console.log("la differenza tra secondo e primo è 8")
} 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var totalShoppingCart = 78;
if (totalShoppingCart > 50) {
  console.log("l'ammontare totale della spesa è " + totalShoppingCart)
} else {
  totalShoppingCart += 10
  console.log("l'ammontare totale della spesa è " + totalShoppingCart)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

var totalShoppingCart = 60;
totalShoppingCart = totalShoppingCart * 4 / 5
if (totalShoppingCart > 50) {
  console.log("l'ammontare totale della spesa è " + totalShoppingCart)
} else {
  totalShoppingCart += 10
  console.log("l'ammontare totale della spesa è " + totalShoppingCart)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

var num7 = 40;
var num8 = 17;
var num9 = 23;
if ((num7 < num8) && (num8 < num9)) {
  console.log(num7 + " < " + num8 + " < " + num9)
} else if ((num7 < num8) && (num9 < num7)) {
  console.log(num9 + " < " + num7 + " < " + num8)
} else if (num7 < num8) {
  console.log(num7 + " < " + num9 + " < " + num8)
} else if ((num8 < num7) && (num9 < num8)) {
  console.log(num9 + " < " + num8 + " < " + num7)
} else if ((num8 < num7) && (num9 > num7)) {
  console.log(num8 + " < " + num7 + " < " + num9)
} else {
  console.log(num8 + " < " + num9 + " < " + num7)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

var a = 78;
if (typeof a == "number") {
  console.log("Si, è un numero")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var num10 = 88;
if ( num10 % 2 == 0) {
  console.log(num10 + " è pari")
} else {
  console.log(num10 + " è dispari")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 5) {
    console.log("Meno di 5");
} else if (val < 10) {
    console.log("Meno di 10");
} else {
    console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto";
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me.skills);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

var numeri = []
numeri.push(1)
numeri.push(2)
numeri.push(3)
numeri.push(4)
numeri.push(5)
numeri.push(6)
numeri.push(7)
numeri.push(8)
numeri.push(9)
numeri.push(10)
console.log(numeri)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numeri.fill(100, 9)
console.log(numeri)

/* SCRIVI QUI LA TUA RISPOSTA */
