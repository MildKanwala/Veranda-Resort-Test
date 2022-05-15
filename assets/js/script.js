$(document).ready(function () {
  $('#brand').click(function () {
    $('#comInfo').toggleClass("dropdownMenu-active");
  })
  $('#dropdownMenu').on({
    click: function () {
      $('#comInfo').toggleClass("dropdownMenu-active");
    }
  })

  $('.money').counterUp({
    delay: 10,
    time: 1200
  })
})

/* Swiper */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    360: {
      slidesPerView: 1
    },
    412: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 1,      
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 28,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 28,
    },    
  },
});

