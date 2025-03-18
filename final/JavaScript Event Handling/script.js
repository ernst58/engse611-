const cunnies = document.querySelectorAll('.cunny');
const mainImage = document.getElementById('mainImage');

cunnies.forEach(cunny => {
  cunny.addEventListener('click', () => {
    mainImage.src = cunny.src;
  });
});