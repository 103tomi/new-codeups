
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  $(function () {
    // ハンバーガーメニュー
    $(".js-hamburger,.js-drawer").click(function () {
      $(".js-hamburger").toggleClass("is-active");
      $(".js-drawer").fadeToggle();
    });
  });

  // ドロワーメニュー自動で閉じる
  $(window).on("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeDrawer();
      resetHamburger();
    }
  });

  function openDrawer() {
    $(".js-drawer").fadeIn();
    $(".js-hamburger").addClass("is-open");
  }

  function closeDrawer() {
    $(".js-drawer").fadeOut();
  }

  function resetHamburger() {
    if ($(".js-hamburger").hasClass("is-active")) {
      $(".js-hamburger").removeClass("is-active");
    }
  }

  // // メインビューのスライダー
  var swiper = new Swiper(".js-mv-swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    autoplay: {
      delay: 3000,
    },
  });

  // キャンペーンのスライダー
  var swiper = new Swiper(".js-campaign-swiper", {
    loop: true,
    speed: 1500,
    slidesPerView: 1.2,
    spaceBetween: 24,
    allowTouchMove: false,

    breakpoints: {
      768: {
        slidesPerView: 3.2,
        spaceBetween: 40,
      },
    },

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//   const fadeIn = function(){

//     const target = document.getElementsByClassName('js-effect');
//     const position = Math.floor(window.innerHeight * .75);

//     for (let i = 0; i < target.length; i++) {

//         let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
//         let offsetBottom = Math.floor(target[i].getBoundingClientRect().bottom);

//         if (offsetTop < position) {
//             target[i].classList.add('scroll-in');
//         }
        
//         if(offsetBottom < 0){
//             target[i].classList.remove('scroll-in');
//         }
//     }
// }
// window.addEventListener('scroll', fadeIn, false);
const fadeIn = function() {
  const targets = document.getElementsByClassName('js-effect');
  const position = Math.floor(window.innerHeight * 0.75);

  for (let i = 0; i < targets.length; i++) {
    const offsetTop = Math.floor(targets[i].getBoundingClientRect().top);
    const offsetBottom = Math.floor(targets[i].getBoundingClientRect().bottom);

    if (offsetTop < position) {
      targets[i].classList.add('scroll-in');
    } else {
      targets[i].classList.remove('scroll-in');
    }
  }
};

window.addEventListener('scroll', fadeIn, false);


});
