let burger = document.querySelector('.burger');
let menu = document.querySelector('.mobile__menu')

burger.addEventListener('click', () => {
  menu.classList.toggle('open')
})

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && menu.classList.contains('open') && !burger.contains(e.target)) {
    menu.classList.remove('open')
  }
})
