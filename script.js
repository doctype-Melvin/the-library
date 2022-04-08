let grid = document.querySelector('.grid');
let addBook = document.querySelector('.add');
let deleteAll = document.querySelector('.deleteAll');
let popAdd = document.getElementById('pop-add')
let closeBtn = document.querySelector('.closeBtn');

let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');

//Book prototype
function Book(title, author, pages){
    this.title = title,
    this.author = author,
    this.pages = pages
}

//Storage for book input
let library = [];

//Link popup to addBook button
addBook.addEventListener('click', openPopUp);
popAdd.addEventListener('click', () => {
    addToLibrary()
    closePopUp();
    
});
closeBtn.addEventListener('click', closePopUp);

function openPopUp() {
    document.getElementById('popup').style.display = 'block';
}

function closePopUp() {
    document.getElementById('popup').style.display = 'none';
}

function addToLibrary() {
    let userBook = new Book(title.value, author.value, pages.value);
    library.push(userBook);
    console.log('This should push new book instance to library', 'Remove inputs in form')
    return library
}