function add(){
    let txt = document.getElementById("text");
    
    let d = JSON.parse(localStorage.getItem("list")) || []
    d.push(txt.value);
    localStorage.setItem("list", JSON.stringify(d))
    txt.value = "";
}
// display()

function display(){
    let div = document.getElementById("content")
    div.innerHTML = "";
    let a = JSON.parse(localStorage.getItem("list")) || []
    for(let i = 0; i < a.length; i++){
        p = document.createElement('p')
    p.innerText = a[i];
    div.appendChild(p);
    }
}

function clearNotes(){
    localStorage.clear();
    display();
}