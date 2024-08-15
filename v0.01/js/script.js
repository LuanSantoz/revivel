// global



// menu de botões

const btnsMenu = document.querySelector(".btns-menu");
const openBtnsMenu = document.querySelector(".open-btns-menu");

openBtnsMenu.addEventListener('click', () => {
  btnsMenu.classList.toggle('active');
})