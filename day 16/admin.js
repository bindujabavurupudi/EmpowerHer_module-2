let div = document.getElementById("container")
let add = document.getElementById("add");
let books = [];
add.addEventListener("click", () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let book = {
        title: title,
        author: author,
        category: category
    }
    books.push(book);
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value = "--select--"
    show()

})

function show() {
    div.innerHTML = "";
    
    for (let i = 0; i < books.length; i++) {
        let obj = books[i]
        let html = `<div class = "box">
        <img src="https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg" alt="" width=50% style = "text-align : center">
        
        <p>Title: ${obj.title}</p>
        <p>Author: ${obj.author}</p>
        <p>Category: ${obj.category}</p>
        <button onclick = "del(${i})">Delete</button>
        </div>`
        
        div.innerHTML += html;
        
    }
}


function Sort() {
    books.sort((a, b) => {
        return a.title.localeCompare(b.title);
    })
    show();
    
}
function revSort() {
    books.sort((a, b) => {
        return b.title.localeCompare(a.title);
    })
    show();
}

function del(idx) {
    alert(`Deleting the book named ${books[idx].title} written by ${books[idx].author}`)
    books.splice(idx, 1);
    show();
}

function filter() {
    let filterByCat = document.getElementById("filter");
    div.innerHTML = "";
    
        for (let i = 0; i < books.length; i++) {
            if (filterByCat.value == "All" || books[i].category === filterByCat.value) {
                let obj = books[i]
                html = `<div class = "box">
                <img src="https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg" alt="" width=50% style = "text-align : center">
                
                <p>Title: ${obj.title}</p>
                <p>Author: ${obj.author}</p>
                <p>Category: ${obj.category}</p>
                <button onclick = "del(${i})">Delete</button>
                </div>`
                
                div.innerHTML += html;
            }
            
        }
    }
    

    function  homePage(){
        window.location.href = "index.html";
    }
