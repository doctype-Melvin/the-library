let grid = document.querySelector('.grid');

//Buttons
let addBook = document.querySelector('.add');
let deleteAll = document.querySelector('.deleteAll');
let popAdd = document.getElementById('pop-add')
let closeBtn = document.querySelector('.closeBtn');

//Form fields
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');


//Book prototype
function Book(title, author, pages){
    this.title = title,
    this.author = author,
    this.pages = pages
}

//Creates new book instance and pushes to library
function addToLibrary() {
    let userBook = new Book(title.value, author.value, pages.value);
    library.push(userBook);
    clearForm();
    return library
}

//Storage for book input
let library = [
    {
        title: 'Chaotic events with lots of witnesses',
        author: 'Reginald Jones',
        pages: '239'
    }
];

//Add book button triggers popup window
addBook.addEventListener('click', openPopUp);
//Form inputs processing + closing popup window
popAdd.addEventListener('click', () => {
    addToLibrary();
    closePopUp();
});
closeBtn.addEventListener('click', closePopUp);

//Display functions of popup window
function openPopUp() {
    document.getElementById('popup').style.display = 'block';
}

function closePopUp() {
    document.getElementById('popup').style.display = 'none';
}

//Clears form after book addition
function clearForm(){
    title.value = '';
    author.value = '';
    pages.value = '';
}

function removeBook(e){
    //Removes single book from library
}

function markRead(e){
    //Marks a book as read and changes card color
}

