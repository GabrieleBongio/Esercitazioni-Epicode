/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*  
  Esistono 5 tipi primitivi di datatype in JS che sono: number, string, boolean, null e undefined, e un tipo complesso: gli oggetti
  
  Il type number ha come valore un qualsiasi numero, sia intero che decimale, sia positivo che negativo
  gli unici caratteri validi nel type number sono le cifre da 0 a 9 e il . che divide le cifre intere da quelle decimali
  
  Il type string ha come valore una qualsiasi stringa alfanumerica, questa deve essere indicata con virgolette, singole o doppie, sia all'inizio che alla fine
  non esistono regole che determinano quale tipo di virgoletta prescegliere, l'unica regola è che le virgolette iniziali e finali devono essere uguali, 
  per esempio "Hello World!" o 'Hello World!'
  per inserire un carattere speciale prima di esso deve essere posizionato un \

  Il type boolean ha solo due valori possibili: true e false, si possono definire anche tramite operazioni di comparazione tra altri tipi di dati

  Il type null ha un solo valore possibile: null che non appartiene a nessuno dei precedenti tipi di dato

  Il type undefined ha un solo valore possibile: undefined rappresenta un valore che non esiste e non ha assegnato nessun valore (N.B. null è diverso da undefined)

  Il type object definisce tutti gli altri elementi che possiamo trovare in JavaScript
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name = "Gabriele"
console.log (name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log (12 + 20)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var x = 12
console.log (x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Bongio"
console.log (name)
const a = "Pippo"
/* a = "Pluto" */
console.log (a)


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log (4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name1 = "john"
var name2 = "John"
console.log (name1 == name2)
console.log (name1.toLowerCase == name2.toLowerCase)

