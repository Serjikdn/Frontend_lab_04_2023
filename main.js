let one = "Welcome to my lab! Student of ZIPZ-22-1 group. Serhii Horshkov. Glory to Ukraine";
let two = "Для виконання коду програми натисніть на потрібне завдання та виконуйте подальщі інструкції у правому вікні";
const stringLine = document.querySelector("#myLine");
stringLine.textContent = one;
let switcher = 'one';


function assignValue() {
    if (switcher == 'two') {
        stringLine.textContent = one
        switcher = 'one'
    } else if (switcher == 'one') {
        stringLine.textContent = two
        switcher = 'two'
    }
}

setInterval(assignValue, 40000);


let taskResult = document.querySelector('#taskResult');

// Отримуємо всі елементи з класом "section div a"
const taskList = document.querySelectorAll('section div a');
const windowTask = document.querySelector('iframe');

// Додаємо обробник події click до кожного тега
taskList.forEach(function (task) {
    task.addEventListener('click', handleClick);
});

// Функція, яка викликається при натисканні на тег
function handleClick(event) {
    // Отримуємо номер тега з атрибуту "data-tag-index"
    const taskId = event.currentTarget.getAttribute('id');

    // Викликаємо функцію та передаємо номер тега
    setOpenPage(taskId);
}

// Функція, яка виконується із номером тега
function setOpenPage(taskId) {
    windowTask.src = taskId + ".html"
}
