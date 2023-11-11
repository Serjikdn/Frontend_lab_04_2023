const shape = document.querySelector('.shape');
const width = document.querySelector('#widthShape');
const height = document.querySelector('#heightShape');
const rotate = document.querySelector('#rotateShape');

function setParam(){
    console.log(width.value)
    shape.style.width = width.value +'px';
    shape.style.height = height.value +'px';
    shape.style.transform = `rotate(${rotate.value}deg)`;

}
setParam();
width.addEventListener('input', setParam);
height.addEventListener('input', setParam);
rotate.addEventListener('input', setParam);