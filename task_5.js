const images = document.querySelectorAll('.gallery img');

images.forEach((e) => e.addEventListener('click', (img) => {
    img.target.className = img.target.className === 'not-selected' ? 'selected' : 'not-selected';
}));


