// global

const monitor = document.querySelector(".monitor");

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
const createTaskBtn = document.querySelector(".create-task-btn");

openCTModal.addEventListener('click', () => {
  createTaskModal.style.display = "flex"
});

closeCTModal.addEventListener('click', () => {
  createTaskModal.style.display = "none"
});

// criar tarefa

createTaskBtn.addEventListener('click', () => {
  const taskNameInp = document.querySelector(".task-name-inp").value;
  const taskColorInp = document.querySelector(".task-color-inp").value;
  const taskTimeInp = document.querySelector("#task-time-inp").value;

  const taskGoalInp = document.querySelector(".task-goal-inp").value;
  const taskQntInp = document.querySelector("#task-qnt-inp").value;
  const taskAnotationInp = document.querySelector(".task-anotation-inp");

  if (taskNameInp == "") {
    alert("preencha o campo para adicionar um nome a tarefa");
  } else {
    const task = document.createElement("div");
    const taskInfo = document.createElement("p");
    const taskCheck = document.createElement("span");

    task.classList.add("task");

    taskInfo.classList.add("task-info");
    taskCheck.classList.add("task-check");

    taskInfo.innerHTML = `<p>${taskNameInp}</p><p>${taskQntInp} ${taskGoalInp}.</p>`;
    taskInfo.firstElementChild.id = "task-name";
    

    task.appendChild(taskInfo);
    task.appendChild(taskCheck);
    monitor.appendChild(task);
  }
})

/*
  mostrar elementos escondidos de acordo com o valor de task-type
  criar modelo de hábito
    estrutura - nome, check, botão abrir menu de botões.
      esc: meta/sub-tarefas, menu de botões(editar, apagar)
    interação - completar hábito, abrir menu de botões, editar, apagar

  criar divisões de horários e separar hábitos
  criar um sistema de contagem de dias

*/