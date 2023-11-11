const image = document.querySelector('.size-image img');
const sizeButton = document.querySelector('button');

sizeButton.addEventListener('click', ()=> image.classList.toggle('big-size'));