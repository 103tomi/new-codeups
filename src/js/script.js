
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


    // ハンバーガーメニュー
    $(".js-hamburger,.js-drawer").click(function () {
      $(".js-hamburger").toggleClass("is-active");
      $(".js-drawer").fadeToggle();
    });

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
    slidesPerView: 1.3,
    spaceBetween: 24,
    allowTouchMove: false,

    breakpoints: {
      768: {
        slidesPerView: 3.45,
        spaceBetween: 35,
    }
  },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

// カラーアニメーション
  var box = $('.js-effect'),
    speed = 700;

  box.each(function () {
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
      image = $(this).find('img');
    var counter = 0;

    image.css('opacity', '0');
    color.css('width', '0%');

    color.on('inview', function () {
      if (counter == 0) {
        $(this).delay(200).animate({ 'width': '100%' }, speed, function () {
          image.css('opacity', '1');
          $(this).css({ 'left': '0', 'right': 'auto' });
          $(this).animate({ 'width': '0%' }, speed);
        })
        counter = 1;
      }
    });
  });

  //TOPへ戻るボタン
  $(function () {
    const pageTop = $(".js-page-top");
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
    pageTop.click(function () {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        300
      );
      return false;
    });
  });
});
