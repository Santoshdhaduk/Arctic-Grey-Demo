document.addEventListener("DOMContentLoaded", function () {
  function initCartUpsellSwiper() {
    if (document.querySelector(".cart-upsell")) {
      new Swiper(".cart-upsell", {
        slidesPerView: 2.5,
        spaceBetween: 12,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".cart-upsell .swiper-button-next",
          prevEl: ".cart-upsell .swiper-button-prev",
        },
      });
    }
  }

  // Cart Update Event Listen Karo
  subscribe(PUB_SUB_EVENTS.cartUpdate, function () {
    setTimeout(() => {
      initCartUpsellSwiper(); // Cart update hone ke baad Swiper reinitialize
    }, 500); // Thoda delay taaki cart update complete ho jaye
  });

  // Initialize Swiper on page load
  initCartUpsellSwiper();
});