const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

/* before complate login */
let textInput = document.getElementById('ThisisLogin');
let Runbtn = document.getElementById('Thisisbtn');

function printPocess(){
    let number = textInput.value;
    
    output.innerHTML = number
}
Runbtn.addEventListener('click', printPocess);