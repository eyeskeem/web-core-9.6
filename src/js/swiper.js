let swiper;

function initSwiper() {
    if (window.innerWidth <= 320 && !swiper) {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            spaceBetween: 0,
            pagination: {
                el: ".swiper-pagination",
            },
        });
    }

    if (window.innerWidth > 320 && swiper) {
        swiper.destroy(true, true);
        swiper = undefined;
    }
}

initSwiper();

window.addEventListener("resize", initSwiper);

const showMoreBtn = document.querySelector('.show-more');
const showMoreText = document.querySelector('.show-more span');
const logos = document.querySelectorAll('.hidden');

showMoreBtn.addEventListener('click', () => {
    logos.forEach(item => {
        item.classList.toggle('show');
    });

    showMoreBtn.classList.toggle('open');

    if (showMoreBtn.classList.contains('open')) {
        showMoreText.textContent = 'Скрыть';
    } else {
        showMoreText.textContent = 'Показать всё';
    }
});