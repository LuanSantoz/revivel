// var, functions ands class

const taskNameInp = document.querySelector(".task-name-inp");
const tasksContainer = document.querySelector(".tasks-container");
const createTaskBtn = document.querySelector(".create-task-btn");
const taskStats = document.querySelector(".tasks-stats-data")
let taskStatus = false;
let taskCount = 0;

// db and load data

let dbTasksStats = [];
let dbTasks = [];

// load tasks stats

function loadTasksStats() {
    let taskComplete = 0;
    for (let index = 0; index < dbTasks.length; index++) {
        if (dbTasks[index][2] === true) {
            taskComplete++
        }
    }
    taskStats.innerHTML = `${taskComplete} / ${taskCount}`
}

// load tasks
if (localStorage.dbtasks) {
    dbTasks = JSON.parse(localStorage.dbtasks)
    console.log(dbTasks);
}

function loadTasks() {
    for (let index = 0; index < dbTasks.length; index++) {
        const task = document.createElement('div');
        const taskName = document.createElement('p');
        const taskCheck = document.createElement('span');
        let taskComp = taskCount + 1
    
        task.classList.add("task");
        taskName.classList.add("task-name");
        taskCheck.classList.add("task-check");

        if (dbTasks[index][2] === true) {
            taskCheck.classList.toggle("clicked");
            taskName.classList.toggle("finish");
        }
    
        taskCheck.onclick = () => {
            taskCheck.classList.toggle("clicked");
            taskName.classList.toggle("finish");

            console.log(taskCheck.classList[1]);
            
            if (taskCheck.classList[1] == "clicked") {
                for (let index = 0; index < dbTasks.length; index++) {
                    if (taskComp === dbTasks[index][0]) {
                        dbTasks[index][2] = true;
                    }
                }
                loadTasksStats();
            } else {
                for (let index = 0; index < dbTasks.length; index++) {
                    if (taskComp === dbTasks[index][0]) {
                        dbTasks[index][2] = false;
                    }
                }
                loadTasksStats();
            }
            localStorage.dbtasks = JSON.stringify(dbTasks);
        };
    
        taskName.innerHTML = dbTasks[index][1];
    
        task.appendChild(taskName);
        task.appendChild(taskCheck);
        tasksContainer.appendChild(task);
        taskCount++
        loadTasksStats();
    };
};

// menu btns

const openBtnsMenu = document.querySelector(".open-btns-menu");

openBtnsMenu.addEventListener("click", () => {
    const btnsContainer = document.querySelector(".btns-container");

    setTimeout(() => {
        if (btnsContainer.classList[1] == "open") {
            openBtnsMenu.innerText = "CLOSE";
        } else {
            openBtnsMenu.innerText = "OPEN";
        };
    }, 100);

    btnsContainer.classList.toggle("open");
});

const tasksModal = document.querySelector(".tasks-modal");
const openTaskModal = document.querySelector(".open-modal");
const closeTaskModal = document.querySelector(".close-modal");

openTaskModal.addEventListener('click', () => {
    tasksModal.showModal();
});

closeTaskModal.addEventListener('click', () => {
    tasksModal.close();
});

// create and save task

createTaskBtn.addEventListener('click', () => {
    if (taskNameInp.value == "") {
        alert("Error!")
    } else {
        const task = document.createElement('div');
        const taskName = document.createElement('p');
        const taskCheck = document.createElement('span');
        let taskComp = taskCount + 1

        task.classList.add("task");
        taskName.classList.add("task-name");
        taskCheck.classList.add("task-check");

        taskCheck.onclick = () => {
            taskCheck.classList.toggle("clicked");
            taskName.classList.toggle("finish");

            if (taskCheck.classList[1] == "clicked") {
                for (let index = 0; index < dbTasks.length; index++) {
                    if (taskComp === dbTasks[index][0]) {
                        dbTasks[index][2] = true;
                    }
                }
                loadTasksStats();
            } else {
                for (let index = 0; index < dbTasks.length; index++) {
                    if (taskComp === dbTasks[index][0]) {
                        dbTasks[index][2] = false;
                    }
                }
                loadTasksStats();
            }
            localStorage.dbtasks = JSON.stringify(dbTasks);
        };

        taskName.innerHTML = taskNameInp.value;

        task.appendChild(taskName);
        task.appendChild(taskCheck);
        taskCount++;
        loadTasksStats();
        tasksContainer.appendChild(task);
        let temp = [taskCount, taskNameInp.value, taskStatus];
        dbTasks.push(temp);
        localStorage.dbtasks = JSON.stringify(dbTasks);
        taskNameInp.value = "";
    };
});

// remove tasks 

const removeTasksBtn = document.querySelector(".remove-task-menu");

removeTasksBtn.addEventListener('click', () => {
    for (let index = 0; index < dbTasks.length; index++) {
        tasksContainer.removeChild(tasksContainer.firstElementChild);
    };
    dbTasks = [];
    localStorage.dbtasks = "";
    taskCount = 0
    loadTasksStats();
});
