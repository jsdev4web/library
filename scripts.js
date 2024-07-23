let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function(){
    return this.title, this.author, this.pages,
    this.read
  }
}

let book1 = new Book("Hobbit", "Julie", 120, true)
console.log(book1)

let book2 = new Book("Google Search", "Danny", 294, true)
console.log(book2)

let book3 = new Book("Mobile cells phones", "Jack",
550, true)
console.log(book3)

myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)
console.log(myLibrary)


let main = document.querySelector(".main")
        console.log(main)

let bookHolder = document.createElement("div")
bookHolder.setAttribute("class", "bookHolder");
main.appendChild(bookHolder)

let addBtn = document.createElement("button")
        addBtn.setAttribute("id", "addBtn")
        addBtn.innerText = "Add Book"
        
        main.appendChild(addBtn)
        main.insertBefore(addBtn, bookHolder)

addBtn.addEventListener("click", () => {
    document.getElementById("myDialog").showModal()
    
})

let subBtn = document.getElementById("submit")
subBtn.addEventListener("click", (e) => {
    console.log(e)
    e.preventDefault()
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let isRead = document.getElementById("isRead").value
    let book4 = new Book(title, author, pages, isRead)
    console.log(book4)
    myLibrary.push(book4)
    document.getElementById("myDialog").remove()


    showBooks()
})


       
function clearDivs(){

    let html = ""
    let main = document.querySelector(".main")
    console.log(main)
    main.appendChild(bookHolder)

    main.appendChild(addBtn)
    main.insertBefore(addBtn, bookHolder)
    //main.insertBefore(removeBtn, bookHolder)

    bookHolder.innerText = html;
}


function showBooks(){

    clearDivs()


    myLibrary.forEach(function (book){
        console.log(book)

        let bookHolder = document.querySelector(".bookHolder")
        console.log(bookHolder)

        let bookDiv = document.createElement("div")
        bookDiv.setAttribute("class", "bookDiv")
        bookHolder.appendChild(bookDiv)

        let html = "";
        html += "Book: " + book.title + "\n" +
                "Author: " + book.author + "\n" +
                "Pages: " + book.pages + "\n" +
                "Click read status:" + "\n";


        bookDiv.innerText = html;

        let readBtn = document.createElement("button")
        readBtn.setAttribute("class", "readBtn");
        bookDiv.appendChild(readBtn)
        book.read = false;
        let readStatText = "not read";
        readBtn.style.backgroundColor = "red"
        readBtn.innerText = readStatText

        readBtn.addEventListener("click", isRead);

        function isRead(){
            if (readBtn.innerText === "read"){
                book.read = false
                readBtn.style.backgroundColor = "red"
                console.log(book.read)
                readBtn.innerText = "not read"
        } else if(readBtn.innerText === "not read"){
            book.read = true
            readBtn.style.backgroundColor = "green"
            console.log(book.read)
            readBtn.innerText = "read"
        }
    }
    
    Object.setPrototypeOf(Book, isRead.prototype)

    let removeBtn = document.createElement("button")
    removeBtn.setAttribute("id", "removeBtn")
    removeBtn.innerText = "Remove Book"

    bookDiv.appendChild(removeBtn)

    removeBtn.addEventListener("click", (e) => {
        let currElement = e.currentTarget
        console.log(currElement)
        

        let myDivs = document.querySelectorAll('.bookDiv')
        //console.log(myDivs) works get me array nodelist
        
        myDivs.forEach(function(book, index){
            book.addEventListener("click", (e) => {
                let bookDiv = document.getElementsByClassName("bookDiv")
                console.log(index)
                console.log(myLibrary[index])
                myLibrary[index]

                myLibrary.splice(index, 1)
                clearDivs()
                showBooks()
                })
            })
        
        })

    })
}


showBooks()

function addBookToLibrary() {
  // do stuff here
 
}

