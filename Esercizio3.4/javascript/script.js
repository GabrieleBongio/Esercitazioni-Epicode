const numberArray = [];

const generateTable = function () {
    for (let i = 1; i < 91; i++) {
        numberArray.push(i);
        const NewNumber = document.createElement("div");
        NewNumber.classList.add("number");
        NewNumber.innerHTML = "<h3>" + i + "</h3>";
        document.getElementById("tabellone").appendChild(NewNumber);
    }
}

generateTable();
console.log(numberArray);

const randomNumberButton = function (e) {
    e.preventDefault();
    randomNumber();
}

const randomNumber = function () {
    if (numberArray.length > 0) {
        const numeroEstratto = Math.floor(Math.random() * 90) + 1;
        console.log(numeroEstratto);
        if (numberArray.findIndex((n) => {return n == numeroEstratto}) == -1 ) {
            randomNumber();
        } else {
            numberArray.splice(numberArray.findIndex((n) => {return n == numeroEstratto}), 1);
            console.log(numberArray);
            const ListaDeiDivDeiNumeri = document.getElementById("tabellone").children
            const ArrayDeiDivDeiNumeri = Array.from(ListaDeiDivDeiNumeri);
            const divDelNumeroEstratto = ArrayDeiDivDeiNumeri[numeroEstratto - 1];
            console.log(divDelNumeroEstratto);
            rimuoviUltimoEstratto();
            divDelNumeroEstratto.classList.add("ultimoEstratto");
            document.querySelector("h2").innerHTML = "Il numero estratto è: <b>" + numeroEstratto + "</b>"
            convalidaNumerino(numeroEstratto);
            victory();
        }
    }   
}

const rimuoviUltimoEstratto = function () {
    const ultimoEstratto = document.querySelector(".ultimoEstratto");
    if (ultimoEstratto) {
        ultimoEstratto.classList.remove("ultimoEstratto");
        ultimoEstratto.classList.add("giaEstratto");
    }
}

document.getElementById("estrai").addEventListener("click", randomNumberButton);

var a = 1;

const generaTabellina = function () {
    const NewTabellina = document.createElement("div");
    NewTabellina.classList.add("tabellina");
    NewTabellina.id = "tabellinaNumero" + a;
    NewTabellina.innerHTML = "<h2>" + a + "° tabellina</h2>";
    a += 1;
    const numeri = [];
    while (numeri.length < 24) {
        numerino = Math.floor(Math.random() * 90) + 1
        if (numeri.findIndex((n) => {return n == numerino}) == -1) {
            if (numerino < 10) {
                numeri.push("0" + numerino)
            } else {
                numeri.push(numerino + "")
            }
        }
    }
    numeri.sort();
    for (let i = 0; i < 24; i++) {
        const NumerinoTab = document.createElement("div");
        NumerinoTab.classList.add("numeroPersonale");
        NumerinoTab.innerHTML = "<h3 class='numero" + parseInt(numeri[i]) + "'>" + parseInt(numeri[i]) + "</h3>";
        NewTabellina.appendChild(NumerinoTab);
    }
    document.getElementById("tabellina").appendChild(NewTabellina);
}

const CreaTabelline = function (e) {
    e.preventDefault();
    if (numberArray.length == 90) {
        const x = document.getElementById("numeroTabelline").value;
        for (let i = 0; i < x; i++) {
            generaTabellina();
        }
    }
}

document.getElementById("creaTabelline").addEventListener("click", CreaTabelline);

const convalidaNumerino = function (Numero) {
    const caselleDaBarrare =document.getElementsByClassName("numero" + Numero);
    console.log(caselleDaBarrare);
    for (let i = 0; i<caselleDaBarrare.length; i++) {
        caselleDaBarrare[i].parentElement.classList.add("giaEstratto")
    }
}

// Mi sembrava utile aggiungere una funzione che valutava se una tabellina avesse vinto, lo so che non serviva :)

const victory = function () {
    const NumeroDiTabelline = document.getElementsByClassName("tabellina");
    for (let i = 0; i < NumeroDiTabelline.length; i++) {
        const numeriTab = document.querySelectorAll("#tabellinaNumero" + (i + 1) + " .giaEstratto");
        if (numeriTab.length == 24) {
            window.alert("LA TABELLINA NUMERO " +  (i+1) + " HA VINTO!!!!!")
        } 
    }
}