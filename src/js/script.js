
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  $(function () {
    // ハンバーガーメニュー
    $(".js-hamburger,.js-drawer").click(function () {
      $(".js-hamburger").toggleClass("is-active");
      $(".js-drawer").fadeToggle();
    });
  });

});
