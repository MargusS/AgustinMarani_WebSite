const workTitle = document.querySelector(".work-title");
const workDesc = document.querySelector(".work-desc");
const gitLink = document.querySelector(".github a");

const workInfo = (index) => {
    workTitle.textContent = `${works[index].title}`;
    workDesc.textContent = `${works[index].description}`;
    gitLink.href = `${works[index].git}`
}

swiper.on("slideChange", (e) => {
    workInfo(e.activeIndex);
})