

const button = document.getElementById('hamburguer')
const overlay = document.querySelector('.header-nav-overlay')


button.addEventListener('click', () => {
  console.log('hamburguer clicked');
  document.querySelector('.header').classList.toggle('nav-active');
});

overlay.addEventListener('click', () => {
  console.log('overlay clicked');
  document.querySelector('.header').classList.remove('nav-active');
});


