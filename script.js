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
        title: 'Chaotic events with lots of text',
        author: 'Reginald Jones',
        pages: '423'
    },
    {
        title: 'The price of life',
        author: 'Petros Galafinakis',
        pages: '389'
    }
];

//Add book button triggers popup window
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

//Creates new book instance and pushes to library
function addToLibrary() {
    let userBook = new Book(title.value, author.value, pages.value);
    library.push(userBook);
    clearForm();
    return library
}

//Clears form after book addition
function clearForm(){
    title.value = '';
    author.value = '';
    pages.value = '';
}

function removeBook(e){
    console.log(e)
}

function markRead(e){
    console.log(e.target)
}

if (library != []) {
    for (let i = 0; i < library.length; i++){
        bookDetails(library[i].title, library[i].author, library[i].pages, i)
}
};

function bookDetails(title, author, pages, index){
    let card = document.createElement('div');
    card.classList.add('card');

    let cardTitle = document.createElement('div');
    cardTitle.classList.add('cardTitle');
    cardTitle.textContent = title;
        let cardAuthor = document.createElement('div');
        cardAuthor.classList.add('cardAuthor');
        cardAuthor.textContent = author;
            let cardPages = document.createElement('div');
            cardPages.classList.add('cardPages');
            cardPages.textContent = pages;
                let cardIndex = document.createElement('div');
                cardIndex.setAttribute('data-index', index)
    card.append(cardTitle, cardAuthor, cardPages);
    grid.append(card);
    console.log(cardIndex.dataset.index)
}