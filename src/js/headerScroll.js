const header = document.querySelector("header .container");
const menu = document.querySelector(".navbar-menu");
const logo = document.querySelector(".navbar-logo");
const personal_img = document.querySelector(".personal-img");

window.addEventListener("scroll", function () {
    // if (window.scrollY > 0 && this.window.scrollY <= 740) {
    //     console.log(this.scrollY);
    //     var scrolled = this.window.scrollY * 0.073
    //     menu.style.transform = `translateY(${-1.5 * scrolled}vh)`;
    //     menu_a.style.fontSize = `${-10 * scrolled}rem`;
    //     logo.style.transform = `translateX(${-1.5 * scrolled}%)`;
    // }
    header.classList.toggle("move-header", window.scrollY >= 60)
    header.classList.toggle("bg-header", window.scrollY >= 805)
    menu.classList.toggle("move-menu", window.scrollY >= 60)
    logo.classList.toggle("move-logo", window.scrollY >= 60)
    personal_img.classList.toggle("move-img", window.scrollY >= 2)
})



