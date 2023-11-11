const shape = document.querySelector('.shape');
const width = document.querySelector('#widthShape');
const height = document.querySelector('#heightShape');
const rotate = document.querySelector('#rotateShape');
const widthNum = document.querySelector('#widthNumber');
const heightNum = document.querySelector('#heightNumber');
const rotateNum = document.querySelector('#rotateNumber');
widthNum.value = width.value;
heightNum.value = height.value;
rotateNum.value = rotate.value;

function setParam(){
    shape.style.width = width.value +'px';
    shape.style.height = height.value +'px';
    shape.style.transform = `rotate(${rotate.value}deg)`;

}
setParam();
width.addEventListener('input', () => {
    widthNum.value = width.value;
    setParam();
});
height.addEventListener('input', () => {
    heightNum.value = height.value;
    setParam();
});
rotate.addEventListener('input', () => {
    rotateNum.value = rotate.value;
    setParam();
});
widthNum.addEventListener('input', () => {
    width.value = widthNum.value;
    setParam();
});
heightNum.addEventListener('input', () => {
    height.value = heightNum.value;
    setParam();
});
rotateNum.addEventListener('input', () => {
    rotate.value = rotateNum.value;
    setParam();
});