let taskInput = document.getElementById("taskInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.style.marginLeft = "10px";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    completeBtn.addEventListener("click", () => {
        span.style.color= "green"

    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
});
