let brandsSwiper;


function initSwiper() {
  if (window.innerWidth < 768 && !brandsSwiper) {
    brandsSwiper = new Swiper(".brandsSwiper", {
      slidesPerView: "auto",
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination-brands",
        clickable: true,
      },
    });
  }

  if (window.innerWidth >= 768 && brandsSwiper) {
    brandsSwiper.destroy(true, true);
    brandsSwiper = undefined;
  }
}

initSwiper();

window.addEventListener("resize", initSwiper);

const showMoreBtn = document.querySelector(".swiper__brand-cards .show-more");
const showMoreText = document.querySelector(".swiper__brand-cards .show-more span");
const logos = document.querySelectorAll(".swiper__brand-cards .hidden, .swiper__brand-cards .hidden_pc");

if (showMoreBtn) {
  showMoreBtn.addEventListener("click", () => {
    logos.forEach((item) => {
      item.classList.toggle("show");
    });

    showMoreBtn.classList.toggle("open");

    showMoreText.textContent = showMoreBtn.classList.contains("open")
      ? "Скрыть"
      : "Показать всё";
  });
}