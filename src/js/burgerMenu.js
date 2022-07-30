function hiddeMenu() {
    hamburger.addEventListener('click', function () {
        menu.classList.toggle('visibleMenu');
        hamburger.classList.toggle('lineAnimation');
    })
}