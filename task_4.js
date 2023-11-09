const progress = document.querySelector('#progress');
const nextButton = document.querySelector('#nextTask');
const check = document.querySelector('#check');
const oneExample = document.querySelector('#task');
const answer = document.querySelector('.test_2 input');
const info = document.querySelector('#info');
const numTask = document.querySelector('#numTask');

const tasks = [];
const result = [];
let taskNumber = 0;

// створює массив прикладів
function creatTasks(number) {
    for (let i = 0; i < number; i++) {
        const operandA = Math.floor(Math.random() * 10) + 1;
        const operandB = Math.floor(Math.random() * 10) + 1;
        tasks.push([operandA, operandB, operandA * operandB]);
    }
}

// перевіряє обрану відповідь
function checkAnswerTask(task, resultList, taskNumber, equal) {
    if (!result[taskNumber] && answer.value !== "") {
        answer.readOnly = true;
        if (task[2] === equal) {
            result.push(true);
            info.textContent = `Correct answer`;
        } else {
            result.push(false);
            info.textContent = `Wrong, correct answer ${task[2]}`;
        }
    } else info.textContent = "Choose the correct one!";
}

// показує стан відповідей
function showStateTask(number, result) {
    const trueAnswer = result.filter(e => e === true);
    let state = trueAnswer.length < 1 ? 0 : (trueAnswer.length / number) * 100;
    progress.textContent = `Total score ${state}% (${trueAnswer.length} correct answers out of ${number})`;
    numTask.textContent = `task ${taskNumber + 1}`;

}

// показує завданя
function showOneExample(task) {
    oneExample.textContent = `${task[0]} * ${task[1]} =`;
}

// виконання
function launch(number, answer) {
    if (taskNumber < number) {
        checkAnswerTask(tasks[taskNumber], result, taskNumber, parseInt(answer));
        showStateTask(number, result);
    }
}

// наступне завдання
function nextExample() {
    if (answer.value !== "") {
        action(allTask, answer.value)
        info.textContent = "____________________________";
        if (taskNumber < allTask - 1) {
            taskNumber += 1;
            writeInfo();
            answer.readOnly = false;
        }
    } else {
        info.textContent = "Choose the correct one!";
    }
}

// оновлення інформації
function writeInfo() {
    showStateTask(taskCount, result);
    showOneExample(tasks[taskNumber]);
    answer.value = "";
}

const taskCount = 10;
info.textContent = "____________________________";
creatTasks(taskCount);
writeInfo();
check.addEventListener("click", () => {
    launch(taskCount, answer.value)
});
nextButton.addEventListener('click', nextExample);