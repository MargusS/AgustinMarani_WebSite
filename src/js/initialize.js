const header = document.querySelector("header .container");
const menu = document.querySelector(".navbar-menu");
const logo = document.querySelector(".navbar-logo");
const personal_img = document.querySelector(".personal-img");
const links = document.querySelectorAll(".navbar-menu a");
const section = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger-lines');

document.addEventListener('DOMContentLoaded', function () {
    scrollSpy();
    smoothScroll();
    hiddeMenu();
    window.onbeforeunload = () => {
        window.scrollTo(0, 0);
    }
})