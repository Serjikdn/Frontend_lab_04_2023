const stateString = document.querySelector('#state');
const nextTask = document.querySelector('.test button');
const example = document.querySelector('#example');
const answers = document.querySelectorAll('.test input');
const answersText = document.querySelectorAll('.test label')

const number = 10;
const taskList = [];
const resultList = [];
const countTask = taskList.length;
let count = 0;

function creatTask(number) {
    for (let i = 0; i < number; i++) {
        const operandA = Math.floor(Math.random() * 9) + 1;
        const operandB = Math.floor(Math.random() * 9) + 1;
        taskList.push([operandA, operandB, operandA * operandB]);
    }
}

function checkAnswer(taskList, resultList, taskNumber, answer) {
    taskNumber -= 1;
    if (resultList[taskNumber]) {
        if (taskList[taskNumber] === answer) {
            resultList.push(true);
        } else {
            resultList.push(false);
        }
        answers.forEach(button => {
            button.disabled = true;
        });
    }
}

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
    if (options.includes(solved)){
        return options;
    } else {
        options[Math.floor(Math.random() * 4)] = solved;
    }
    return options;
}

function showState(number, resultList) {
    const trueAnswer = resultList.filter(e => e === true);
    let progress = trueAnswer < 1 ? 0 : (number / trueAnswer) * 100;
    stateString.textContent = `Total score ${progress}% (${trueAnswer.length} correct answers out of ${number}`
}

function showExample(task) {
    example.textContent = `${task[0]} * ${task[1]} =`;
}

function showOptions(task){
    const options = getAnswerOptions(task[2])
    answersText.forEach((e, i) => e.textContent = options[i])
}

function action() {
    if (count < countTask) {
        showState(taskList[count], resultList);
    }
}

function pushNextTask() {
    count += 1;
}

creatTask(number);
showState(number, resultList);
showExample(taskList[count]);

showOptions(taskList[count])
