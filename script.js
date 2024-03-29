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
class Book{
    constructor(title, author, pages, status){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
}}

//Storage for book input
let library = [
    {
    title: `I think so`,
    author: `Kelis Thompson`,
    pages: '343',
    status: false
},
{
    title: `Never knew I could`,
    author: `Sasha Jackobs`,
    pages: '298',
    status: false
},
{
    title: `The Self`,
    author: `Michael Priotkowsky`,
    pages: '276',
    status: false
},
{
    title: `Ocelots and Zealots`,
    author: `Jane K. Tiberius`,
    pages: '277',
    status: false
},
{
    title: `Don't grow up`,
    author: `Kenan Abdul`,
    pages: '311',
    status: false
}
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
closeBtn.addEventListener('click', () => {
    closePopUp();
});

document.querySelector('.cancel').addEventListener('click', () => {
    closeModal()
})

document.querySelector('.confirm').addEventListener('click', () => {
    removeAll();
    closeModal()
})

//Display functions of popup window
function openPopUp() {
    document.getElementById('popup').style.display = 'block';
}

function closePopUp() {
    document.getElementById('popup').style.display = 'none';
}

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

//Clears form after book addition
function clearForm(){
    title.value = '';
    author.value = '';
    pages.value = '';
}

deleteAll.addEventListener('click', () => {
    openModal()
    // removeAll()
});

//Making the cards
class cardFactory {
constructor (title, author, pages, index, status) {
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
        read.dataset.read = false;
        let buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttonContainer')
        buttonContainer.append(remove, read);

            read.addEventListener('click', () => {
                // card.classList.toggle('card');
                // card.classList.toggle('cardRead');
                getReadIndex(card.dataset.index);
                if (card.className == 'cardRead') {
                    read.textContent = `Mark as unread`;
                } else read.textContent = `Mark as read`
            });

            remove.addEventListener('click', removeCard)

        cardTitle.textContent = title;
        cardAuthor.textContent = author;
        cardPages.textContent = pages + ` pages`;
        card.dataset.index = index;
        // card.dataset.read = status
        card.append(cardTitle, cardAuthor, cardPages, buttonContainer);
        grid.append(card);
}
}
function createCard(){
    for (let i = library.length-1; i < library.length; i++){
        new cardFactory(library[library.length-1].title, 
                    library[library.length-1].author,
                    library[library.length-1].pages,
                    library.length-1)
    }
};

function libraryStack(input){
    if (input != []) {
        for (let i = 0; i < input.length; i++){
            new cardFactory(input[i].title,
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
    setReadIndex()
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

function getReadIndex(input){
    if (library[input].status == false){
    library[input].status = true;
    }else if (library[input].status != false){
        library[input].status = false;
    }

    setReadIndex()
}

function setReadIndex(){
    let cards = [...document.querySelectorAll('.card, .cardRead')]
    console.log(cards)
    for (let i = 0; i < library.length; i++){
        if (library[i].status != false &&
            cards[i].dataset.index == i) {
            cards[i].className = 'cardRead';
        } else if (library[i].status == false &&
            cards[i].dataset.index == i) {
                cards[i].className = 'card';
            }
    }
}

// Form Validation
const inputFields = document.querySelectorAll('.input')

inputFields.forEach(field => field.addEventListener('input', () => {
    field.setCustomValidity('')
    field.checkValidity()
}))

inputFields.forEach(field => field.addEventListener('invalid', () => {
    if (field.value === '') {
        field.setCustomValidity(`Please enter a ${field.type}`)
    } else {
        field.setCustomValidity(`I am expecting a ${field.type}`)
    }
}))
