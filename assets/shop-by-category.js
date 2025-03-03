  document.addEventListener('DOMContentLoaded', function() {
      const tabButtons = document.querySelectorAll('.category-tab');
      const tabContents = document.querySelectorAll('.tab-content');

      // Function to switch tabs
      function openTab(tabId) {
        tabContents.forEach(content => {
          content.style.display = content.id === tabId ? 'block' : 'none';
        });
        tabButtons.forEach(button => {
          button.classList.toggle('active', button.dataset.tabTarget === tabId);
        });
      }

      // Add click events
      tabButtons.forEach(button => {
        button.addEventListener('click', function() {
          openTab(this.dataset.tabTarget);
        });
      });

      // Show first tab by default if exists
      if (tabButtons.length > 0) {
        openTab(tabButtons[0].dataset.tabTarget);
      }

  const featureCollectionElement = document.querySelector('.feature-collection');
  if (!featureCollectionElement) return;
  
  const deskCol = parseInt(featureCollectionElement.getAttribute('data-desk-col'), 10) || 4;
  const mobileCol = parseInt(featureCollectionElement.getAttribute('data-mobile-col'), 10) || 1;

  const swiper = new Swiper('.feature-collection', {
    slidesPerView: mobileCol,
    spaceBetween:10,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    navigation: {
        nextEl: ".shop-by-category-section-button-next",
        prevEl: ".shop-by-category-section-button-prev",
      },
    freeMode: true,
    grabCursor: true,
    breakpoints: {
      768: {
        slidesPerView: deskCol
      }
    }
  });
});
