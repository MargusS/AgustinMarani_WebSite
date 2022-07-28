const header = document.querySelector("header .container");
const menu = document.querySelector(".navbar-menu");
const logo = document.querySelector(".navbar-logo");
const personal_img = document.querySelector(".personal-img");
const links = document.querySelectorAll(".navbar-menu a");
const section = document.querySelectorAll('section');


//Implementar onWheel event


document.addEventListener('DOMContentLoaded', function () {
    scrollSpy();
    smoothScroll();
    window.onbeforeunload = () => {
        window.scrollTo(0, 0);
    }
})

function scrollSpy() {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
        }
        if (window.scrollY > 0 && this.window.scrollY <= 740) {
            // console.log(this.scrollY);
            var scrolled = this.window.scrollY * 0.0733
            header.style.backgroundColor = `rgba(0,34,34, ${0.05 * scrolled})`;
            // menu.style.transform = `translateY(${-1.5 * scrolled}vh) translateX(${0.3 * scrolled}vw)`;
            // logo.style.transform = `translateX(${-0.6 * scrolled}vw)`;
        }
        header.classList.toggle("move-header", window.scrollY >= 60)
        // header.classList.toggle("bg-header", window.scrollY >= 805)
        menu.classList.toggle("move-menu", window.scrollY >= 60)
        logo.classList.toggle("move-logo", window.scrollY >= 60)
        personal_img.classList.toggle("move-img", window.scrollY >= 2)
        section.forEach(sec => {
            let top = this.window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top > offset - 500 && top < offset + height * 100) {
                links.forEach(links => {
                    menu.classList.toggle('change-color', id == 'about' || id == 'work' || id == 'skills')
                    links.classList.remove('active');
                    document.querySelector('.navbar-menu a[href*= ' + id + ']').classList.add('active');
                });
            };
        });
    });
}

function smoothScroll() {
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sect = document.querySelector(e.target.attributes.href.value);
            sect.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
}





