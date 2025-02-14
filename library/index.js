const myLibrary = [];

function Book(name,author){
    this.name = name;
    this.author = author;
}

function addBook(book){
    myLibrary.push(book);
}

function displayBooks(books){
    const list = document.getElementById('list');
    n = books.length

    for (let i=0; i<n; i++){
        const newList = document.createElement('li');
        newList.innerHTML = `Name: ${books[i].name} Author: ${books[i].author}`
        list.appendChild(newList)
    }
}
const b1 = new Book("HP","JKR");
const b2 = new Book("abc", "Pqr");

addBook(b1);
addBook(b2);
displayBooks(myLibrary);
console.log("hi");
console.log(myLibrary);

const dialogbox = document.getElementById('dialog');
const addBtn = document.getElementById('add_btn');
const submitBtn = document.getElementById('submit_btn');
const form = document.getElementById('form')

addBtn.addEventListener('click',()=> dialogbox.showModal());
form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    console.log(name.value)
    const nbook = new Book(name.value,author.value);
    addBook(nbook);
    displayBooks([nbook]);
    name.value = "";
    author.value = "";
    dialogbox.close();
});
