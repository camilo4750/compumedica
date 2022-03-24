$(document).ready(function () {
  $(".ir-arriba").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1300) {
      $(".ir-arriba").slideDown(300);
    } else {
      $(".ir-arriba").slideUp(300);
    }
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 450) {
      $("#menu").css("background-color", "#FDFEFE");
    } else {
      $("#menu").css("background-color", "transparent");
    }
  });

  var typed = new Typed(".typed", {
    strings: [
      "COMPUMEDICA",
      "No somos los unicos, pero nos esforzamos por ser los mejores.",
    ],
    typeSpeed: 50,
    loop: true,
  });
});
