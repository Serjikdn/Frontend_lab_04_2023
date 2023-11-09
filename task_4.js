const progress = document.querySelector('#progress');
const nextButton = document.querySelector('#nextTask');
const check = document.querySelector('#check');
const example = document.querySelector('#task');
const answer = document.querySelector('.test_2 input');
const wrong = document.querySelector('#info');
const numTask = document.querySelector('#numTask');

const tasks = [];
const result = [];
let count = 0;

// створює массив прикладів
function creatTask(number) {
    for (let i = 0; i < number; i++) {
        const operandA = Math.floor(Math.random() * 10) + 1;
        const operandB = Math.floor(Math.random() * 10) + 1;
        tasks.push([operandA, operandB, operandA * operandB]);
    }
}

// перевіряє обрану відповідь
function checkAnswer(task, resultList, taskNumber, equal) {
    if (!result[taskNumber] && answer.value !== "") {
        answer.readOnly = true;
        if (task[2] === equal) {
            result.push(true);
            wrong.textContent = `Correct answer`;
        } else {
            result.push(false);
            wrong.textContent = `Wrong, correct answer ${task[2]}`;
        }
    } else wrong.textContent = "Choose the correct one!";
}

// показує стан відповідей
function showState(number, result) {
    const trueAnswer = result.filter(e => e === true);
    let state = trueAnswer.length < 1 ? 0 : (trueAnswer.length / number) * 100;
    progress.textContent = `Total score ${state}% (${trueAnswer.length} correct answers out of ${number})`;
    numTask.textContent = `task ${count + 1}`;

}

// показує завданя
function showExample(task) {
    example.textContent = `${task[0]} * ${task[1]} =`;
}

// виконання
function action(number, answer) {
    if (count < number) {
        checkAnswer(tasks[count], result, count, parseInt(answer));
        showState(number, result);
    }
}

// наступне завдання
function nextTask() {
    if (answer.value !== "") {
        wrong.textContent = "____________________________";
        if (count < allTask - 1) {
            count += 1;
            writeInfo();
            answer.readOnly = false;
        }
    } else {
        wrong.textContent = "Choose the correct one!";
    }
}

// оновлення інформації
function writeInfo() {
    showState(allTask, result);
    showExample(tasks[count]);
    answer.value = "";
}

const allTask = 10;
wrong.textContent = "____________________________";
creatTask(allTask);
writeInfo();
check.addEventListener("click", () => {
    action(allTask, answer.value)
});
nextButton.addEventListener('click', nextTask);