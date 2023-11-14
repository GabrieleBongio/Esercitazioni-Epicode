var results = 0;
document.getElementById("Più").addEventListener("click", function() {
    results += 1;
    document.getElementById("demo").innerHTML = "results = " + results;
})

document.getElementById("paginaSuccessiva").addEventListener("click", function() {
    document.getElementById("Results").value = results;
    document.getElementById("hiddenResults").submit();
})