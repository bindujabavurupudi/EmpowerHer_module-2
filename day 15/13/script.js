let change = document.querySelector(".change");
let update = document.querySelector(".update");
let colour = document.querySelector(".color")
let div = document.querySelector("div");
let text = document.querySelector(".text")
change.addEventListener("click", () =>{
    let color = colour.value.trim();
    div.style.backgroundColor = color;

    if (div.style.backgroundColor === "") {
        alert("Invalid color name!");
    }
})
update.addEventListener("click", () =>{
    let val = text.value.trim();
    div.innerText = val;
    if(div.innerText === "")
        alert("Please enter some text")
    
})
