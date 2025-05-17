console.log("laoded script")

const button = document.getElementById('hamburguer')
const overlay = document.querySelector('.header-nav-overlay')

console.log("this is the button-->",button);

button.addEventListener('click', () => {
  console.log('hamburguer clicked');
  document.querySelector('.header').classList.toggle('nav-active');
});

overlay.addEventListener('click', () => {
  console.log('overlay clicked');
  document.querySelector('.header').classList.remove('nav-active');
});


