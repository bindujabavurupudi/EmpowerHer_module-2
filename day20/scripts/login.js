let btn = document.getElementById("loginBtn");

btn.addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        alert("No user found! Please signup.");
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {
        localStorage.setItem("auth", true);
        alert("Login Successful!");
        window.location.href = "todos.html";
    } else {
        alert("Invalid Credentials!");
    }
});
