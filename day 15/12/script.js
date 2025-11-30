let ul = document.querySelector("ul");
let add = document.querySelector(".add");
// let del = document.querySelector(".delete");
let cnt = 0;
add.addEventListener("click", ()=>{
    let li = document.createElement("li")
    li.innerText = "New Item";
    ul.append(li);
    if(cnt%2 == 0){
        li.style.fontWeight = "bold";
        li.style.color = "blue"
    }
    else{
        li.style.fontStyle = "italic";
        li.style.color = "red"
        
        
    }
    cnt++;
})
