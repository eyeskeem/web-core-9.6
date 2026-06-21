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


let videoTechSwiper;

function initVideoSwiper() {
  if (window.innerWidth < 768 && !videoTechSwiper) {
    videoTechSwiper = new Swiper(".videoTechSwiper", {
      slidesPerView: "auto",
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination-video",
        clickable: true,
      },
    });
  }

  if (window.innerWidth >= 768 && videoTechSwiper) {
    videoTechSwiper.destroy(true, true);
    videoTechSwiper = undefined;
  }
}

initVideoSwiper();

window.addEventListener("resize", initVideoSwiper);

const showMoreVideoBtn = document.querySelector(".show-more-video");
const showMoreVideoText = document.querySelector(".show-more-video span");
const hiddenVideoCards = document.querySelectorAll(
  ".hidden_video, .hidden_video-pc"
);

if (showMoreVideoBtn) {
  showMoreVideoBtn.addEventListener("click", () => {
    hiddenVideoCards.forEach((item) => {
      item.classList.toggle("show");
    });

    showMoreVideoBtn.classList.toggle("open");

    showMoreVideoText.textContent =
      showMoreVideoBtn.classList.contains("open")
        ? "Скрыть"
        : "Показать всё";
  });
}