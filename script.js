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

//Card display variables
let card = document.createElement('div');
card.classList.add('card');
    let cTitle = document.createElement('div');
    cTitle.classList.add('cardTitle');
        let cAuthor = document.createElement('div');
        cAuthor.classList.add('cardAuthor');
            let cPages = document.createElement('div');
            cPages.classList.add('cardPages');
                let index = document.createElement('div');
                index.classList.add('index');
                index.setAttribute('data-index', 0);
//Card buttons
let rmBtn = document.createElement('button');
rmBtn.classList.add('rmBtn');
rmBtn.setAttribute('data-Index', 0);
rmBtn.textContent = 'Remove Book';
rmBtn.addEventListener('click', removeBook)
    let read = document.createElement('button');
    read.classList.add('read');
    read.setAttribute('data-index', 0);
    read.textContent = 'Mark as read';
    read.addEventListener('click', markRead)
        let buttons = document.createElement('div');
        buttons.classList.add('buttonContainer');
        buttons.append(rmBtn, read);

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
    addBookDetails();
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

//Clears the form after book addition
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

function createCard(){
    let card = document.createElement('div');
    card.classList.add('card');
    card.append(cTitle, cAuthor, cPages, buttons);
    grid.append(card);
}


function addBookDetails(){
    for (let i = 0; i < library.length; i++){
        cTitle.textContent = library[i].title;
        cAuthor.textContent = library[i].author;
        cPages.textContent = library[i].pages + ` pages`;
        index.dataIndex = i;
        rmBtn.dataIndex = i;
        read.dataIndex = i;
    }
createCard()
}
addBookDetails();