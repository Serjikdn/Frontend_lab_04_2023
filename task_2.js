const checkedList = document.querySelector('#checkedList');
const emailList = document.querySelectorAll('.email input');
emailList.forEach(elem => elem.addEventListener('click', showEmail))
function showEmail(){
    const checked = Array.from(emailList)
        .filter(elem => elem.checked)
        .map(elem => elem.name);
    checkedList.value = checked.join('; ');
}

