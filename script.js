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

//Storage for book input
let library = [
    {
        title: 'Chaotic events with lots of witnesses',
        author: 'Reginald Jones',
        pages: '239'
    }
];
newCard()
//Creates new book instance and pushes to library
function addToLibrary() {
    let userBook = new Book(title.value, author.value, pages.value);
    library.push(userBook);
    clearForm();
    newCard();
}

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

//Card variable
function newCard(){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-index', 0)
    let title = document.createElement('div');
    title.classList.add('cardTitle');
    let author = document.createElement('div');
    author.classList.add('cardAuthor');
    let pages = document.createElement('div');
    pages.classList.add('cardPages');

        let rmBtn = document.createElement('button');
        rmBtn.classList.add('rmBtn');
        rmBtn.textContent = `Remove Book`
        let read = document.createElement('button');
        read.classList.add('read');
        read.textContent = `Mark as read`
        let buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttonContainer');
        buttonContainer.append(rmBtn, read);

    for (let i = 0; i < library.length; i++) {
        title.textContent = library[i].title;
        author.textContent = library[i].author;
        pages.textContent = library[i].pages + ` pages`;
        card.dataIndex = i;
    }
    card.append(title, author, pages, buttonContainer);
    grid.append(card);
}

function removeBook(e){
    //Removes single book from library
}

function markRead(e){
    //Marks a book as read and changes card color
}
