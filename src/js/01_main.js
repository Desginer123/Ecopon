let burger = document.querySelector('.burger');
menu = document.querySelector('.mobile__menu'),
overflow = document.querySelector('#overlay'),
body = document.querySelector('body'),
menuLinks = document.querySelectorAll('.mobile__menu ul li a');


function menuOpen() {
  menu.classList.toggle('open');
  burger.classList.toggle('open');
  overlay.classList.toggle('active');
  body.style.overflow = 'hidden';
}
function menuClose(e) {
  if (!menu.contains(e.target) && menu.classList.contains('open') && !burger.contains(e.target)) {
    menu.classList.remove('open');
    overlay.classList.remove('active');
    body.style.overflow = '';
    burger.classList.remove('open');

  }

}

burger.addEventListener('click', () => {
  if(burger.classList.contains('open')) {
    menu.classList.remove('open');
    overlay.classList.remove('active');
    body.style.overflow = '';
    burger.classList.remove('open');
} else {
    menuOpen()
}
})

document.addEventListener('click', menuClose)

menuLinks.forEach(link => {

  link.addEventListener('click', (e) => {
    if(link.contains(e.target)) {
      menu.classList.remove('open');
      overlay.classList.remove('active');
      body.style.overflow = '';
      burger.classList.remove('open');

    }
  })
});

let users = document.querySelectorAll('.user');
let userWrapper = document.querySelector('.user__wrapper')
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

document.addEventListener('scroll', () => {
  if(window.pageYOffset > 74) {
    document.querySelector('.header').classList.add('fixed')
  }
  else {
    document.querySelector('.header').classList.remove('fixed')
  }
})
