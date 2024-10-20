document.addEventListener('DOMContentLoaded', () => {
  const menubtn = document.querySelector('#menu-btn');
  const closebtn = document.querySelector('#menuclose');
  const menu = document.querySelector('#sidebar');

  if (menubtn && closebtn && menu) {
    menubtn.addEventListener('click', () => {
      menu.classList.add('open');
    });

    closebtn.addEventListener('click', () => {
      menu.classList.remove('open');
    });

    console.log('DOM fully loaded and parsed');
  } else {
    console.error('One or more elements not found');
  }
});

