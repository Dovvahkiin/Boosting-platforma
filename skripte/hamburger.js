const hamburger = document.querySelector('.hamburger');
const navigacijameni = document.querySelector('.bloker');

hamburger.addEventListener('click', function() {
  navigacijameni.classList.toggle('aktivno');
});