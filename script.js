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
function Book(title, author, pages, index){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.index = index
}

//Storage for book input
let library = [
    {
        title: 'Chaotic events with lots of text',
        author: 'Reginald Jones',
        pages: '423'
    }
];
addCard()

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
    addCard();
    return library
}

//Clears the form after book addition
function clearForm(){
    title.value = '';
    author.value = '';
    pages.value = '';
}


function removeBook(){
    library.slice(0)
}

function markRead(e){
    console.log(e.target)
}

//Adds new card to display area
function addCard(){
    let card = document.createElement('div');
    card.classList.add('card');
    let title = document.createElement('div');
    title.classList.add('cardTitle');
    let author = document.createElement('div');
    author.classList.add('cardAuthor');
    let pages = document.createElement('div');
    pages.classList.add('cardPages');
    let index = document.createElement('div');
    index.classList.add('index');
    index.setAttribute('data-index', 0)
        
            let rmBtn = document.createElement('button');
            rmBtn.classList.add('rmBtn');
            rmBtn.textContent = 'Remove Book';
            rmBtn.addEventListener('click', removeBook)
                let read = document.createElement('button');
                read.classList.add('read');
                read.textContent = 'Mark as read';
                read.addEventListener('click', markRead)
                    let buttons = document.createElement('div');
                    buttons.classList.add('buttonContainer');
                    buttons.append(rmBtn, read);
                   
            for (let i = 0; i < library.length; i++){
                title.textContent = library[i].title;
                author.textContent = library[i].author;
                pages.textContent = library[i].pages + ` pages`;
                index.dataIndex = i;
            }
    card.append(title, author, pages, buttons)
    grid.append(card);
    return index.dataIndex;
}