var swiper = new Swiper(".product-with-video", {
  slidesPerView: 1.5,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  navigation: {
        nextEl: ".product-with-video .swiper-button-next",
        prevEl: ".product-with-video .swiper-button-prev",
      },
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
