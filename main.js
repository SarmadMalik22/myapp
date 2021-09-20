//Get Modal Elements
let modal = document.getElementById('simpleModal');
//Get open modal button
let modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for openclick
modalBtn.addEventListener('click', openModal);
//listen for closeclick
closeBtn.addEventListener('click', closeModal);
//listen for outsideclick
window.addEventListener('click', outsideClick);

//Function to open Modal
function openModal(){
    modal.style.display = 'block';
}

//Function to close Modal
function closeModal(){
    modal.style.display = 'none';
}

//Function to close Modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}