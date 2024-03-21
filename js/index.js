// var, class and func

const tasksContainer = document.querySelector(".tasks");
const createTaskBtn = document.querySelector(".create-task-btn");

class Task {
    constructor(taskName, taskType) {
        this.taskName = taskName;
        this.taskType = taskType;
    };

    createTask() {
        const task = document.createElement('div');
        const taskName = document.createElement('p');
        const taskCheck = document.createElement('span');

        task.classList.add("task");
        taskCheck.classList.add("task-check");

        taskName.innerText = this.taskName;

        task.appendChild(taskName);
        task.appendChild(taskCheck);

        tasksContainer.appendChild(task);
    }
};

// save and load in bdTasks

let dbTasks = [];

if (localStorage.dbtasks) {
    dbTasks = JSON.parse(localStorage.dbtasks);
};

document.body.onload = () => {
    for (let index = 0; index < dbTasks.length; index++) {
        const task = new Task(dbTasks[index][0], dbTasks[index][1]);

        task.createTask();
    };
};

// open and close tasks-modal

const tasksModal = document.querySelector(".tasks-modal");
const openTasksModal = document.querySelector(".open-tasks-modal");

openTasksModal.addEventListener('click', () => {
    tasksModal.classList.toggle("open");

    setTimeout(() => {
        if (tasksModal.classList[1] == "open") {
            openTasksModal.innerText = "X"
        } else {
            openTasksModal.innerText = "Tasks"
        }
    }, 500);
});

// create tasks and save in dbTasks

createTaskBtn.addEventListener('click', () => {
    const taskInp = document.querySelector("#task-name");
    const taskType = document.querySelector("#task-type").value;

    const task = new Task(taskInp.value, taskType);

    if (taskInp == "") {
        alert("preencha o campo");
    } else {
        let temp = [taskInp.value, taskType];
        dbTasks.push(temp);
        task.createTask();
        localStorage.dbtasks = JSON.stringify(dbTasks);
        taskInp.value = "";
    };
});

// remove tasks

const openRTModal = document.querySelector(".open-rt-modal");

openRTModal.addEventListener('click', () => {
    for (let index = 0; index < dbTasks.length; index++) {
        tasksContainer.removeChild(tasksContainer.firstElementChild);
    };

    localStorage.dbtasks = "";
    dbTasks = [];
});