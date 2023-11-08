//preventDefault()

function newTask () {
    event.preventDefault();
    const task = document.getElementById("task").value;
    document.getElementById("task").value = "";
    const newDivTask = document.createElement("div");
    newDivTask.classList.add("task");
    newDivTask.innerHTML = task;
    newDivTask.innerHTML += "<span class='material-symbols-outlined'>delete </span>";
    document.querySelector("main").appendChild(newDivTask);
    newDivTask.addEventListener("click", overlineTask);
    controllIcons();
    mainPosition();
}

document.getElementById("create").addEventListener("click", newTask, true);

function overlineTask () {
    event.target.classList.toggle("completed");
}

function deleteTask () {
    event.target.parentElement.remove();
    mainPosition()
}
function controllIcons () {
    document.querySelectorAll(".material-symbols-outlined").forEach((icon) => {
    icon.addEventListener("click", deleteTask,true);
    })
}


// la parte successiva è fatta per centrare sempre sullo schermo
// il main, è basata sulle misure del mio schermo non avendo trovato
// un altro metodo per risolvere la situazione

function mainPosition () {
    const main = document.getElementsByTagName("main")[0];
    const pos = 80 + 16 * main.children.length
    main.style.marginTop = " -" + pos + "px";
}