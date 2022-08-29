const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    cardsEffect: {
        slideShadows: false
    },
    grabCursor: true,
    rewind: true,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: true
    },

});

const addWork = () => {
    for (let work of works) {
        swiper.appendSlide(`<div class="swiper-slide" id=${work.id}><img src=${work.image} alt="Slide image" loading="lazy" width="400" height="400"></div>`);
    }
}
