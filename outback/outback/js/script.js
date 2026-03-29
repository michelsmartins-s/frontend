const bnt = document.querySelector('.menu-nav');
const links = document.querySelector('.main-links');

bnt.addEventListener ('click', function() {
    links.classList.toggle('aberta');
});