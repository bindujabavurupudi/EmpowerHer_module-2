function loadNotes() {
    let text = document.getElementById("text");
    let note = localStorage.getItem("notes");

    if (note) {
        text.value = note;
    }
}

function saveNotes() {
    let text = document.getElementById("text").value;

    if (text.trim() === "") {
        alert("Cannot save empty notes!");
        return;
    }
    document.getElementById("text").value = "";
    localStorage.setItem("notes", text);
    alert("Notes saved successfully!");
}

function clearNotes() {
    localStorage.removeItem("notes");
    document.getElementById("text").value = "";
    alert("Notes cleared!");
}