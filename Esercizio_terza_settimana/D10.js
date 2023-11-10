/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

console.log("Esercizio A:");
var sum = 10 + 20;
console.log("sum è uguale a " + sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log("Esercizio B:");
var random = Math.floor(Math.random() * 21);
console.log("random è uguale a " + random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log("Esercizio C:");
const me = {
  name: "Gabriele",
  surname: "Bongio",
  age: 20
}
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log("Esercizio D:");
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

console.log("Esercizio E:");
me.skills = ["html", "css", "javascript"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log("Esercizio F:");
me.skills.push("python");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log("Esercizio G:");
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log("Esercizio 1:");
const dice = () => {return Math.floor(Math.random() * 6 + 1)}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log("Esercizio 2:");
const whoIsBigger = (a, b) => {
  if ( a < b ) {
    return b;
  } else {
    return a;
  }
}
console.log(whoIsBigger(121,96));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log("Esercizio 3:");
const splitMe = (str) => {return str.split(" ")}
console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log("Esercizio 4:");
const deleteOne = (str,bool) => {
  if (bool) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
}
console.log(deleteOne("Ciao", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log("Esercizio 5:");
const onlyLetters = (str) => {
  arrayStr = str.split("");
  var newStr = ""
  arrayStr.forEach((let) => {
    if (["1","2","3","4","5","6","7","8","9","0"].findIndex((n) => {return n == let}) == -1) {
      newStr += let;
    }
  })
  return newStr;
}
console.log(onlyLetters("Ci sono 2 elefanti e 5 pinguini"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log("Esercizio 6:");
const isThisAnEmail = (str) => {
  const strSection = str.split("@");
  if (strSection.length == 2 && strSection[0].length > 0 && strSection[1].length > 0) {
    return true;
  }
}
console.log(isThisAnEmail("giacomo@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log("Esercizio 7:");
const whatDayIsIt = () => {
  const date = new Date();
  switch (date.getDay()) {
    case 0: return "sunday";
    break;
    case 1: return "monday";
    break;
    case 2: return "tuesday";
    break;
    case 3: return "wednesday";
    break;
    case 4: return "thursday";
    break;
    case 5: return "friday";
    break;
    case 6: return "saturday";
    break;
  }
}
console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log("Esercizio 8:");
const rollTheDices = (n) => {
  const risult = {
    sum: 0,
    values: [],
  }
  for (let i = 0; i < n; i++) {
    num = dice();
    risult.sum += num;
    risult.values.push(num);
  }
  return risult;
}
console.log(rollTheDices(6));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log("Esercizio 9:");
const howManyDays = (data) => {
  const thatDay = data.split("/")[0];
  const thatMonth = data.split("/")[1]-1;
  const thatYear = data.split("/")[2];  
  const thatDate = new Date(thatYear, thatMonth, thatDay);
  const thatDateInMilliseconds = thatDate.getTime();
  const today = new Date();
  const todayInMilliseconds = today.getTime();
  const diffrenceMilliseconds = todayInMilliseconds - thatDateInMilliseconds;
  const diffrenceDay = Math.floor(diffrenceMilliseconds / (1000*60*60*24));
  return diffrenceDay; 
}
console.log(howManyDays("23/10/2023"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log("Esercizio 10:");
const isTodayMyBirthday = () => {
  const today = new Date();
  if (today.getDate() == 5 && today.getMonth() == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isTodayMyBirthday());


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
// L'ho spostato perchè mi dava un errore di cannot access movies before inizialisation

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log("Esercizio 11:");
const deleteProp = function (obj, att) {
  delete obj[att];
  return obj;
}
console.log(deleteProp(movies[4],"Type"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log("Esercizio 12:");
const newestMovie = function (array) {
  var newest = {Year: 0};
  array.forEach((film) => {
    if (film.Year > newest.Year) {
      newest = film;
    }
  })
  return newest;
}
console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log("Esercizio 13:");
const countMovies = function (array) {
  return array.length;
}
console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log("Esercizio 14:");
const onlyTheYears = function (array) {
  const arrayYears = [];
  array.forEach((film) => {
    arrayYears.push(film.Year)
  })
  return arrayYears;
}
console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log("Esercizio 15:");
const onlyInLastMillennium = function (array) {
  const lastMilleniumMovies = []
  array.forEach((film) => {
    if (film.Year < 2000) {
      lastMilleniumMovies.push(film)
    }
  })
  return lastMilleniumMovies;
}
console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log("Esercizio 16:");
const sumAllTheYears = function (array) {
  const arrayYears = onlyTheYears(array);
  var sumYears = 0;
  arrayYears.forEach((year) => {sumYears += parseInt(year)});
  return sumYears
}
console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log("Esercizio 17:");
const searchByTitle = function (array, string) {
  return array.filter((film) => {
    return film.Title.includes(string);
  })
}
console.log(searchByTitle(movies, "Rings"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log("Esercizio 18:");
const searchAndDivide = function (array, string) {
  const objResult = {
    match: [],
    unmatch: []
  }
  array.forEach((film) => {
    if (film.Title.includes(string)) {
      objResult.match.push(film);
    } else {
      objResult.unmatch.push(film);
    }
  })
  return objResult;
}
console.log(searchAndDivide(movies, "The"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log("Esercizio 19:");
const removeIndex = function (array, index) {
  array.splice(index, 1);
  return array;
}
console.log(removeIndex(movies, 6));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

console.log("Esercizio 20:");
const seacrhIdContainer = function () {
  return document.getElementById("container");
}
console.log(seacrhIdContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log("Esercizio 21:");
const searchtd = function () {
  return document.getElementsByTagName("td");
}
console.log(searchtd());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log("Esercizio 22:");
const textOfEverytd = function () {
  const tdCollection = searchtd();
  for (let i = 0; i < tdCollection.length; i++) {
    console.log(tdCollection[i].innerText)
  }
}
textOfEverytd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

console.log("Esercizio 23:");
const redBackgroundToEveryA = function () {
  const aCollection = document.getElementsByTagName("a");
  for (let i = 0; i < aCollection.length; i++) {
    aCollection[i].style.backgroundColor = "red";
  } 
}
redBackgroundToEveryA();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

console.log("Esercizio 24:");
const newLiTomyList = function () {
  const newLi = document.createElement("li");
  const myList = document.getElementById("myList");
  myList.appendChild(newLi);
}
// newLiTomyList(); (se no da errore)

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console.log("Esercizio 25:");
const emptymyList = function () {
  const myListChildren = document.getElementById("myList").children;
  for (let i = 0; i < myListChildren.length; i++) {
    myListChildren[i].remove()
  }
}
// emptymyList(); (se no da errore)

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

console.log("Esercizio 26");
const addClassTestToEverytr = function () {
  const trCollection = document.getElementsByTagName("tr");
  for (let i = 0; i < trCollection.length; i++) {
    trCollection[i].classList.add("test")
  }
}
addClassTestToEverytr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

console.log("Esercizio 27:");
const halfTree = (n) => {
  let a = "*";
  for (let i = 0; i < n; i++) {
    console.log(a);
    a += "*";
  }
}
halfTree(9);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log("Esercizio 28:");
const Tree = (n) => {
  let a = "";
  for (let l = 0, m = 1; l < n ; l++, m+=2) {
    for (let i = 0; i < (n - l); i++) {
      a += " ";
    }
    for (let i = 0; i < m; i++) {
      a += "*";
    }
    for (let i = 0; i < (n - l); i++) {
      a += " ";
    }
    console.log(a);
    a = "";
  }    
}
Tree(26);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

console.log("Esercizio 29:");
const isItPrime = function (n) {
  for (let i = 2; i < n/2; i++) {
    if (n%i == 0) {
      return false; 
    }
  }
  return true;
}
console.log(isItPrime(64));

/* Questo array viene usato per gli esercizi. Non modificarlo. */
