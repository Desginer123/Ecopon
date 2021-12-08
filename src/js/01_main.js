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


let users = document.querySelectorAll('.user');
let userWrapper = document.querySelector('.user__wrapper')
console.log(users);

userWrapper.addEventListener('mouseover', (e) => {
  users.forEach((user, key) => {
    if(user.contains(e.target)) {
      user.classList.add('active')
    }
    else {
      user.classList.add('blured');
      user.classList.remove('active')
    }
  });

})

userWrapper.addEventListener('mouseout', (e) => {
  users.forEach((user, key) => {
    if(user.contains(e.target)) {
      user.classList.remove('active')
    }
    else {
      user.classList.remove('blured');
      user.classList.remove('active')
    }
  });

})
