
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
    // loop: true,
    // speed: 1500,
    slidesPerView: 1.2,
    spaceBetween: 24,
    allowTouchMove: false,

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },

    // autoplay: {
    //   delay: 1500,
    //   disableOnInteraction: false,
    // },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //要素の取得とスピードの設定
  var box = $('.js-effect'),
    speed = 700;

  // //.colorboxの付いた全ての要素に対して下記の処理を行う
  // box.each(function () {
  //   $(this).append('<div class="color"></div>')
  //   var color = $(this).find($('.color')),
  //     image = $(this).find('img');
  //   var counter = 0;

  //   image.css('opacity', '0');
  //   color.css('width', '0%');
  //   //inviewを使って背景色が画面に現れたら処理をする
  //   color.on('inview', function () {
  //     if (counter == 0) {
  //       $(this).delay(200).animate({ 'width': '100%' }, speed, function () {
  //         image.css('opacity', '1');
  //         $(this).css({ 'left': '0', 'right': 'auto' });
  //         $(this).animate({ 'width': '0%' }, speed);
  //       })
  //       counter = 1;
  //     }
  //   });
  // });

});
