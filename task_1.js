function showLanguage(){
    const result = document.querySelector('#selectedLanguage');
    const lang = document.querySelectorAll('.language input');
    let selected = Array.from(lang).filter(elem => elem.checked).map(elem => elem.id);
    result.textContent = selected.join(", ");
}