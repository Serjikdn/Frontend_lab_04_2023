const images = ['img%20(1).jpg', 'img%20(2).jpg', 'img%20(3).jpg', 'img%20(4).jpg', 'img%20(5).jpg', 'img%20(6).jpg', 'img%20(7).jpg', 'img%20(8).jpg', 'img%20(9).jpg', 'img%20(10).jpg', 'img%20(11).jpg', 'img%20(12).jpg'];
const previousImage = document.querySelector('#previousImage');
const nextImage = document.querySelector('#nextImage');
const boardImage = document.querySelector('#boardImage');
let position = 0;

function showImage() {
    boardImage.style.opacity = '0';
    boardImage.src = "images/" + images[position];
    setTimeout(()=>{
        boardImage.style.opacity = '1';
    }, 500)
}

function showPreviousImage() {
    if (position > 0) {
        position -= 1;
    }
    showImage();
}

function showNextImage() {
    if (position !== images.length - 1) {
        position += 1;
    }
    showImage();
}

showImage()
previousImage.addEventListener('click', showPreviousImage)
nextImage.addEventListener('click', showNextImage)

