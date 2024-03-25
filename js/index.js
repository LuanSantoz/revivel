// var, class and functions

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