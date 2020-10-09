let count = document.querySelector('span');

let btn = document.querySelectorAll('button')

btn[0].addEventListener('click', lowerCount);
btn[1].addEventListener('click', addCount);


function lowerCount(){

    count.textContent = (count.textContent <= 1) ? 0 : count.textContent -=1;
    
}

function addCount(){
    count.textContent++;
}