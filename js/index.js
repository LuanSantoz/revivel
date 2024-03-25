// criar class tasks e seus metodos
// declarar instâncias ao criar a taréfa e adiciona lá ao .tasks-container
// salvar taréfas no localStorage
// carregar taréfas existêntes no localStorage
// remover taréfas

// adicionar interação ao task-check e salvar dado junto a taréfa no localStorage

// batabase local

let dbTasks = [];

if (localStorage.dbtasks) {
  dbTasks = JSON.parse(localStorage.dbtasks);
  console.log(dbTasks);
};

// var, class and functions

const tasksContainer = document.querySelector(".tasks-container");

let countTasks = 0;

class Tasks {
  constructor(index, duration, type, name, status=false) {
    this.index = index;
    this.name = name;
    this.status = status;
    this.duration = duration;
    this.type = type;
  };

  createTask() {
    const task = document.createElement('div');
    const taskName = document.createElement('p');
    const taskCheck = document.createElement('span');

    task.classList.add("task");
    taskCheck.classList.add("task-check");

    taskCheck.addEventListener('click', () => {
      taskCheck.classList.toggle("checked");

      if (taskCheck.classList[1] == "checked") {
        this.status = true
      } else {
        this.status = false
      };
    });

    taskName.innerText = this.name;

    task.appendChild(taskName);
    task.appendChild(taskCheck);
    tasksContainer.appendChild(task);
  };
};

// load tasks

function loadTasks() {
  for (let index = 0; index < dbTasks.length; index++) {
    console.log(countTasks);
    const task = new Tasks(dbTasks[index][0], 0, 0, dbTasks[index][1], dbTasks[index][2]);

    task.createTask();
  }
}

// open create task modal

const cTModalBackdrop = document.querySelector(".ct-modal-backdrop");
const createTasksModal = document.querySelector(".create-tasks-modal");
const openCTModal = document.querySelector(".open-ct-modal");
const closeCTModal = document.querySelector(".close-ct-modal");

openCTModal.addEventListener('click', () => {
  cTModalBackdrop.style.display = "block";
  createTasksModal.classList.add("open-modal");
});

closeCTModal.addEventListener('click', () => {
  cTModalBackdrop.style.display = "none";
  createTasksModal.classList.remove("open-modal");
});

// create and save tasks

const taskNameInp = document.querySelector("#task-name-inp");
const createTaskBtn = document.querySelector(".create-task-btn");

createTaskBtn.addEventListener('click', () => {
  if (taskNameInp.value == "") {
    alert("preencha o campo corretamente");
  } else {
    const task = new Tasks(countTasks, 0, 0, taskNameInp.value);
    task.createTask()

    let temp = [countTasks, taskNameInp.value, task.status];
    dbTasks.push(temp);
    localStorage.dbtasks = JSON.stringify(dbTasks)
    countTasks++
  }
});

// open and close btns-contaier

const btnsContainer = document.querySelector(".btns-container");
const openBtnsContainer = document.querySelector(".open-btns-container");

openBtnsContainer.addEventListener('click', () => {
  btnsContainer.classList.toggle("menu-open");

  setTimeout(() => {
    if (btnsContainer.classList[1] == "menu-open") {
      openBtnsContainer.innerText = "<";
    } else {
      openBtnsContainer.innerText = ">";
    };
  }, 300);
});

// remove tasks and delete to localStorage

const removeTasksBtns = document.querySelector(".remove-tasks-btn");

removeTasksBtns.addEventListener("click", () => {
  for (let index = 0; index < dbTasks.length; index++) {
    tasksContainer.removeChild(tasksContainer.firstElementChild)
  }

  dbTasks = [];
  countTasks = 0
  localStorage.dbtasks = "";
});