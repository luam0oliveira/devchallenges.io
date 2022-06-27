const buttonClose = document.getElementById('close-icon');
const nav = document.getElementById('nav');
const menuBar = document.getElementById('menu-bar')
const body = document.querySelector('body')

buttonClose.addEventListener('click', () => {
  nav.classList.remove('show');
  body.classList.remove('no-scroll')
})

menuBar.addEventListener('click', () => {
  nav.classList.add('show');
  body.classList.add('no-scroll')
})

