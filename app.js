document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});
