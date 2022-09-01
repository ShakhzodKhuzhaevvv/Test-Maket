const nav = document.querySelector('.header_body');
const burger = document.querySelector('.burger_menu')

burger.addEventListener('click', () => {
    nav.classList.toggle('open')
})