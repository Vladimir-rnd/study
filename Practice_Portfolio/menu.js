document.addEventListener('DOMContentLoaded', function () {
  let burger = document.getElementById('burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
  });
});

