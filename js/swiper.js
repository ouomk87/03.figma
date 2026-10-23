//비주얼 스와이퍼
const visualSw = new Swiper(".visualswiper", {
  loop: true,

  speed: 1200, // 슬라이드가 이동하는 속도 (1.2초)

  //오토플레이
  autoplay: {
    delay: 4000, //1초
    disableOnInteraction: false, //클릭했을때 행동하는거 막아 놓을것
  },

  //페이징
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    //dynamicBullets: true, //dynamic 효과
    clickable: true, //클릭했을때 그대로 보이고 싶을때
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 스와이퍼 2개짜리  01
const visualSw01 = new Swiper(".mySwiper01", {
  loop: true,
  //   speed: 1200,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

// 스와이퍼 2개짜리  02

setInterval(() => {
  const visualSw02 = new Swiper(".mySwiper02", {
    loop: true,
    slidesPerView: 1,
    //   speed: 1200,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
}, 3000);

// 하단 마지막 스와이퍼
var swiper = new Swiper(".banner03-sw", {
  //   spaceBetween: 30,
  //   speed: 1200,
  //   centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});
