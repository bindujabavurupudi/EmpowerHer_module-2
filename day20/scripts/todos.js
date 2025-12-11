// PROTECTED ROUTE
let isAuth = localStorage.getItem("auth");

if (!isAuth) {
    alert("Please Login First!");
    window.location.href = "login.html";
}

async function loadTodos() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();

    let container = document.getElementById("todos");

    data.slice(0, 20).forEach(todo => {
        let div = document.createElement("div");
        div.style.border = "1px solid #333";
        div.style.padding = "10px";
        div.style.margin = "5px 0";

        div.innerHTML = `
            <h3>${todo.title}</h3>
            <p>Status: ${todo.completed ? "Completed" : "Pending"}</p>
        `;

        container.appendChild(div);
    });
}

loadTodos();
