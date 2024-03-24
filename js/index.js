// var, class and functions

// 

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