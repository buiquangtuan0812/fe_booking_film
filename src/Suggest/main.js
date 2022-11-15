const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnSeeMore = $('.button_seeMore')
const listSeeMore = $('.movie__options-list2')
btnSeeMore.onclick = function() {
    listSeeMore.style.display = "flex"
    btnSeeMore.style.display = "none" 
    window.scroll({
        top: 1400,
        behavior: 'smooth'
      });
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true,
    autoplay: {
        delay: 3000,
    },
  });
