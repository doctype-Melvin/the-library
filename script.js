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
//     {
//     title: `I think so`,
//     author: `Kelis Thompson`,
//     pages: '343'
// },
// {
//     title: `Never knew I could`,
//     author: `Sasha Jackobs`,
//     pages: '298'
// },
// {
//     title: `The Self`,
//     author: `Michael Priotkowsky`,
//     pages: '276'
// },
// {
//     title: `Ocelots and Zealots`,
//     author: `Jane K. Tiberius`,
//     pages: '277'
// },
// {
//     title: `Don't grow up`,
//     author: `Kenan Abdul`,
//     pages: '311'
// }
];
//Creates new book instance and pushes to library
function addToLibrary() {
    let userBook = new Book(title.value, author.value, pages.value);
    library.push(userBook);
    clearForm();
}

//Add book button triggers popup window
addBook.addEventListener('click', openPopUp);
//Form inputs processing + closing popup window
popAdd.addEventListener('click', () => {
    addToLibrary();
    closePopUp();
    createCard();
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

deleteAll.addEventListener('click', () => {
    removeAll()
});

//Making the cards
const cardFactory = (title, author, pages, index) => {
    let card = document.createElement('div');
    card.classList.add('card');
    let cardTitle = document.createElement('div');
    cardTitle.classList.add('cardTitle');
    let cardAuthor = document.createElement('div');
    cardAuthor.classList.add('cardAuthor');
    let cardPages = document.createElement('div');
    cardPages.classList.add('cardPages');
    
        let remove = document.createElement('button');
        remove.classList.add('rmBtn');
        remove.dataset.index = index;
        remove.textContent = 'Remove Book';
        let read = document.createElement('button');
        read.classList.add('read');
        read.textContent = 'Mark as read';
        let buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttonContainer')
        buttonContainer.append(remove, read);

            read.addEventListener('click', () => {
                card.classList.toggle('card');
                card.classList.toggle('cardRead');
                if (card.className == 'cardRead') {
                    read.textContent = `Mark as unread`
                } else read.textContent = `Mark as read`
            });

            remove.addEventListener('click', removeCard)

        cardTitle.textContent = title;
        cardAuthor.textContent = author;
        cardPages.textContent = pages + ` pages`;
        card.dataset.index = index;
        card.append(cardTitle, cardAuthor, cardPages, buttonContainer);
        grid.append(card);
}

function createCard(){
    for (let i = library.length-1; i < library.length; i++){
        cardFactory(library[library.length-1].title, 
                    library[library.length-1].author,
                    library[library.length-1].pages,
                    library.length-1)
    }
};

function libraryStack(input){
    if (input != []) {
        for (let i = 0; i < input.length; i++){
            cardFactory(input[i].title,
                input[i].author,
                input[i].pages,
                i)
        }
    } 
}
libraryStack(library)

function removeCard(e){
    let cardIndex = e.target.dataset.index
    let newLibrary = (library.filter(book => library.indexOf(book) != parseInt(cardIndex)));
    resetDisplay();
    library = newLibrary
    libraryStack(newLibrary);
}

function removeAll(){
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
    }
    library = [];
}

function resetDisplay(){
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
    }
}