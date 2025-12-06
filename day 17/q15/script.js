let tasks = [];

// Load tasks from localStorage on page load
window.onload = function () {
    const saved = localStorage.getItem("tasks");

    if (saved) {
        tasks = JSON.parse(saved);
    }

    displayTasks(tasks);
};

// Save to localStorage
function saveToLocal() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add Task
function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Task cannot be empty!");
        return;
    }

    const task = {
        id: Date.now(),    // Unique ID
        text: text,
        completed: false
    };

    tasks.push(task);
    saveToLocal();
    displayTasks(tasks);

    input.value = "";
}

// Toggle Completed State
function toggleComplete(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );

    saveToLocal();
    displayTasks(tasks);
}

// Delete Task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);

    saveToLocal();
    displayTasks(tasks);
}

// Show Tasks
function displayTasks(list) {
    const container = document.getElementById("taskList");
    container.innerHTML = "";

    list.forEach(task => {
        const div = document.createElement("div");
        div.className = "task";

        const textSpan = document.createElement("span");
        textSpan.innerText = task.text;

        if (task.completed) {
            textSpan.classList.add("completed");
        }

        const btns = document.createElement("div");

        const completeBtn = document.createElement("button");
        completeBtn.innerText = task.completed ? "Undo" : "Done";
        completeBtn.className = "btn btn-complete";
        completeBtn.onclick = () => toggleComplete(task.id);

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "btn btn-delete";
        deleteBtn.onclick = () => deleteTask(task.id);

        btns.appendChild(completeBtn);
        btns.appendChild(deleteBtn);

        div.appendChild(textSpan);
        div.appendChild(btns);

        container.appendChild(div);
    });
}

// Search Tasks (real-time)
function searchTasks() {
    const query = document.getElementById("searchInput").value.toLowerCase();

    const filtered = tasks.filter(task =>
        task.text.toLowerCase().includes(query)
    );

    displayTasks(filtered);
}