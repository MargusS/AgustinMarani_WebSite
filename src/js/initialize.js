const header = document.querySelector("header");
const menu = document.querySelector(".navbar-menu");
const logo = document.querySelector(".navbar-logo");
const personal_img = document.querySelector(".personal-img");
const links = document.querySelectorAll(".navbar-menu a");
const section = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger-lines');

document.addEventListener('DOMContentLoaded', () => {
    scrollSpy();
    smoothScroll();
    hiddeMenu();
    addWork();
    workInfo(0);
    window.onbeforeunload = () => {
        window.scrollTo(0, 0);
    }
})