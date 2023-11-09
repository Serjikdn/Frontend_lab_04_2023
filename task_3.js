const stateString = document.querySelector('#state');
const buttonNext = document.querySelector('#next');
const countString = document.querySelector('.test span');
const example = document.querySelector('#example');
const answers = document.querySelectorAll('.test input');
const answersText = document.querySelectorAll('.test label')
const wrong = document.querySelector('#wrong');

const taskList = [];
const resultList = [];
let count = 0;

// створює массив прикладів
function creatTask(number) {
    for (let i = 0; i < number; i++) {
        const operandA = Math.floor(Math.random() * 10) + 1;
        const operandB = Math.floor(Math.random() * 10) + 1;
        taskList.push([operandA, operandB, operandA * operandB]);
    }
}

// перевіряє обрану відповідь
function checkAnswer(task, resultList, taskNumber, answer) {
    if (!resultList[taskNumber]) {
        if (task[2] === answer) {
            resultList.push(true);
        } else {
            resultList.push(false);
            wrong.textContent = `Wrong, correct answer ${task[2]}`
        }
        answers.forEach(button => {
            if (!button.checked) {
                button.disabled = true;
            }
        });
    }
}

// генерує варіанти відповідей
function getAnswerOptions(solved) {
    let options = [];
    for (let i = 0; i < 4; i++) {
        let rand = Math.floor(Math.random() * 101) + 1;
        if (options.indexOf(rand) === -1) {
            options[i] = rand;
        } else {
            options[i] = Math.floor(Math.random() * 101) + 1;
        }
    }
    if (options.includes(solved)) {
        return options;
    } else {
        options[Math.floor(Math.random() * 4)] = solved;
    }
    return options;
}

// показує стан відповідей
function showState(number, resultList) {
    const trueAnswer = resultList.filter(e => e === true);
    let progress = trueAnswer.length < 1 ? 0 : (trueAnswer.length / number) * 100;
    stateString.textContent = `Total score ${progress}% (${trueAnswer.length} correct answers out of ${number})`;
    countString.textContent = `task ${count + 1}`;
}

// показує завданя
function showExample(task) {
    example.textContent = `${task[0]} * ${task[1]} =`;
}

//показує варіанти
function showOptions(task) {
    const options = getAnswerOptions(task[2])
    answersText.forEach((e, i) => e.textContent = options[i])
    answers.forEach((e, i) => e.value = options[i])
}

// виконання
function action(number, answer) {
    if (count < number) {
        checkAnswer(taskList[count], resultList, count, parseInt(answer));
        showState(number, resultList);
    }
}

// наступне завдання
function nextTask() {
    if (answers[0].checked || answers[1].checked || answers[2].checked || answers[3].checked){
        wrong.textContent = "";
        if (count < allTask-1){
            count += 1;
            refresh();
            answers.forEach(button => button.disabled = false);
        }
    }else {
        wrong.textContent = "Choose the correct one!";
    }
}

// оновлення інформації
function refresh() {
    showState(allTask, resultList);
    showExample(taskList[count]);
    answers.forEach(button => button.checked = false)
    showOptions(taskList[count]);
}

const allTask = 10;
creatTask(allTask);
refresh();
answers.forEach(e => e.addEventListener('click', (e) => action(allTask, e.currentTarget.value)))
buttonNext.addEventListener('click', nextTask);