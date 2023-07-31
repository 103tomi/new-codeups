
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  $(function () {
    // ハンバーガーメニュー
    $(".js-hamburger,.js-drawer").click(function () {
      $(".js-hamburger").toggleClass("is-active");
      $(".js-drawer").fadeToggle();
    });
  });

  // ドロワーメニュー自動で閉じる
$(window).on("resize", function() {
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
var swiper = new Swiper(".js-topMv-swiper", {
  loop: true,
  effect: "fade",
  speed: 3000,
  autoplay: {
    delay:3000,
  },
});

var swiper = new Swiper(".js-campaign-swiper", {
  loop: true,
  speed: 1500,
  centeredSlides: true,
  breakpoints: {
    375: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
    },
  breakpoints: {
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
  },
    1440: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
  autoplay: {
    delay:2000,
  },
  });

});
