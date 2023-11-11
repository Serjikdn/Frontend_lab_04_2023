const backgroundItem = document.querySelectorAll('.form fieldset');
const item = document.querySelectorAll('.text');

item.forEach((value, index) => {
    value.addEventListener('focus', () => {
        backgroundItem.forEach((e) => {
            e.classList.remove('select-input');
        });
        backgroundItem[index].classList.add('select-input');
    });
    value.addEventListener('blur', () => {
        backgroundItem[index].classList.remove('select-input');
    });
});

