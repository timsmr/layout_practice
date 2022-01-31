const swiper = new Swiper(".swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: 'bullets',
            bulletActiveClass: 'pagination-style-active',
            bulletClass: 'pagination-style',
        },
        autoplay: {
            delay: 5000,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
      });