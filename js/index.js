// var, class and functions

// open create task modal

const createTasksModal = document.querySelector(".create-tasks-modal");
const openCTModal = document.querySelector(".open-ct-modal");
const closeCTModal = document.querySelector(".close-ct-modal");

openCTModal.addEventListener('click', () => {
  createTasksModal.showModal();
});

closeCTModal.addEventListener('click', () => {
  createTasksModal.close();
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