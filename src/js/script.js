
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

});
