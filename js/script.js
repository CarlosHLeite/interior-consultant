const btn = document.querySelector('.material-icons');
const nav = document.querySelector('.nav');


btn.addEventListener('click', () => {
    nav.classList.toggle("active");
})