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

const showMoreVideoBtn = document.querySelector(
  ".swiper__video-tech .show-more-video"
);

const showMoreVideoText = document.querySelector(
  ".swiper__video-tech .show-more-video span"
);

const hiddenVideoCards = document.querySelectorAll(
  ".swiper__video-tech .hidden-video"
);

if (showMoreVideoBtn && showMoreVideoText) {
  showMoreVideoBtn.addEventListener("click", () => {
    hiddenVideoCards.forEach((item) => {
      item.classList.toggle("show");
    });

    showMoreVideoBtn.classList.toggle("open");

    showMoreVideoText.textContent = showMoreVideoBtn.classList.contains("open")
      ? "Скрыть"
      : "Показать всё";
  });
}