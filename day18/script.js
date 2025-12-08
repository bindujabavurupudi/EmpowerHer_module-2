

fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => response.json())
.then((res) => {
    let d = []
    for(let i = 0; i < 20; i++)
        d.push(res[i]);
    localStorage.setItem("data", JSON.stringify(d));
    
    display();
    
})

let data = JSON.parse(localStorage.getItem("data")) || [];
function display(){
let container = document.getElementById("container");
container.innerHTML = "";
for(let i = 0; i < data.length; i++){
    let html = `<div class = "box"><div class = "upper"><p>Title: ${data[i].title}</p>
<p>Status: ${data[i].completed}</p></div>
<div class = "lower"><button onclick = "del(${i})">delete</button></div></div>`;
container.innerHTML += html;

}
}

function del(i){
    alert("Deleting the selected item")
    data.splice(i, 1)
display();
}




