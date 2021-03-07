// cached elemoents
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

// event listeners
burger.addEventListener('click', function() {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('exit');
});


