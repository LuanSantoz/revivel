// criar class tasks e seus metodos
// declarar instâncias ao criar a taréfa e adiciona lá ao .tasks-container
// salvar taréfas no localStorage
// carregar taréfas existêntes no localStorage
// remover taréfas
// adicionar interação ao task-check e salvar dado junto a taréfa no localStorage
// mostrar tasks-status em tempo real

// salvar progresso diário e reiniciar tasks-checks, tasks-status...
// criar progress-modal e mostrar progresso diário

// mostrar task-info-modal ao clicar no task-name
// adicionar remove-task-btn e edit-task-btn, e exibir em cima do task-info-modal
// mostrar taréfa em aberto no tasks-container


// criar class user e seus métodos - V1 update

// batabase local

let dbTasks = [];
let dbProgress = [];

if (localStorage.dbtasks) {
  dbTasks = JSON.parse(localStorage.dbtasks);
  console.log(dbTasks);
};

// var, class and functions

const date = new Date();
const tasksContainer = document.querySelector(".tasks-container");

let countTasks = 0;
let countTasksStats = 0;
let today = date.getDate();

const loadToday = () => {
  const todayComp = document.querySelector(".today");

  todayComp.innerText = today
};

const loadTasksStats = () => {
  const taskStats = document.querySelector(".total-stats");

  countTasks = dbTasks.length;
  countTasksStats = 0;

  for (let index = 0; index < dbTasks.length; index++) {
    if (dbTasks[index][2] == true) {
      countTasksStats++
    }
  }

  taskStats.innerText = `${countTasksStats} / ${countTasks}`;

  console.log(countTasks);
};

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
        this.status = true;

        for (let index = 0; index < dbTasks.length; index++) {
          if (dbTasks[index][0] == this.index) {
            dbTasks[index][2] = true;
          }

          localStorage.dbtasks = JSON.stringify(dbTasks);

          loadTasksStats();
        }
      } else {
        this.status = false

        for (let index = 0; index < dbTasks.length; index++) {
          if (dbTasks[index][0] == this.index) {
            dbTasks[index][2] = false;
          }

          localStorage.dbtasks = JSON.stringify(dbTasks);

          loadTasksStats();
        };
      }
  
    });

    if (this.status == true) {
      taskCheck.classList.add("checked");
    } else {
      taskCheck.classList.remove("checked");
    }

    taskName.innerText = this.name;

    task.appendChild(taskName);
    task.appendChild(taskCheck);
    tasksContainer.appendChild(task);
  };
};

// load tasks and today

function loadTasks() {
  for (let index = 0; index < dbTasks.length; index++) {
    const task = new Tasks(dbTasks[index][0], 0, 0, dbTasks[index][1], dbTasks[index][2]);
    
    task.createTask();
    loadToday();
    loadTasksStats();
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

cTModalBackdrop.addEventListener('dblclick', () => {
  console.log("ok");
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

    loadTasksStats();
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
  };

  dbTasks = [];
  countTasks = 0;
  localStorage.dbtasks = "";

  loadTasksStats();
});