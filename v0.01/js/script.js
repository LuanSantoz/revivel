// global

const taskList = document.querySelector(".task-list");

// menu de botões

const btnsMenu = document.querySelector(".btns-menu");
const openBtnsMenu = document.querySelector(".open-btns-menu");

openBtnsMenu.addEventListener('click', () => {
  btnsMenu.classList.toggle('active');
  openBtnsMenu.innerText = btnsMenu.classList[1] == "active" ? "Fechar Menu" : "Abrir Menu";
})

// modal para criar tarefas

const createTaskModal = document.querySelector(".create-task-modal");
const openCTModal = document.querySelector(".open-ct-modal");
const closeCTModal = document.querySelector(".close-ct-modal");
const showSubTasksContainer = document.getElementsByName("task-type-inp");
const subTasksModal = document.querySelector(".sub-tasks-container");
const createTaskBtn = document.querySelector(".create-task-btn");

openCTModal.addEventListener('click', () => {
  createTaskModal.style.display = "block"
});

closeCTModal.addEventListener('click', () => {
  createTaskModal.style.display = "none"
});

showSubTasksContainer[0].addEventListener('input', () => {
  subTasksModal.style.display = "none";
})

showSubTasksContainer[1].addEventListener('input', () => {
  subTasksModal.style.display = "block";
});