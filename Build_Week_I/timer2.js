const scriviQui = function () {
    document.getElementById("demo3").innerHTML = document.location.search//slice(9,)
}

document.getElementById("scrivi").addEventListener("click", scriviQui);
