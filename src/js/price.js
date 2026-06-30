let pricesSwiper;

function initPricesSwiper() {
  if (window.innerWidth < 768 && !pricesSwiper) {
    pricesSwiper = new Swiper(".pricesSwiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".prices-pagination",
        clickable: true,
      },
    });
  }

  if (window.innerWidth >= 768 && pricesSwiper) {
    pricesSwiper.destroy(true, true);
    pricesSwiper = undefined;
  }
}

initPricesSwiper();

window.addEventListener("resize", initPricesSwiper);