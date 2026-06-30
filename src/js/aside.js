const burgerBtn = document.querySelector(".burger");
const aside = document.querySelector("aside");
const closeBtn = document.querySelector(".X");
const overlay = document.querySelector(".overlay");

if (burgerBtn && aside && closeBtn && overlay) {
  burgerBtn.addEventListener("click", () => {
    aside.classList.add("open");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    aside.classList.remove("open");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    aside.classList.remove("open");
    overlay.classList.remove("active");
  });
}