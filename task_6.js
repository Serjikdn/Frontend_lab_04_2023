const backgroundItem = document.querySelectorAll('.form fieldset');
const item = document.querySelectorAll('.text');

item.forEach((value, index) => {

    value.addEventListener('click', () => {
        backgroundItem.forEach((e)=> e.classList.remove('select-input'))
        backgroundItem[index].className = 'select-input';
    })
})