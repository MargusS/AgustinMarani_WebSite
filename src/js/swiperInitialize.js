const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    cardsEffect: {
        slideShadows: false
    },
    grabCursor: true,
    rewind: true,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true
    },

});

const addWork = () => {
    for (let work of works) {
        swiper.appendSlide(`<div class="swiper-slide" id=${work.id}>
                                <img src=${work.image} alt="Slide image" loading="lazy">
                                <div class="hover-link"><a href=${work.deploy}>Ir a la Web</a></div>
                            </div>`);
    }
}
