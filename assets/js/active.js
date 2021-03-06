(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.banner-slide').owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      dots: true,
      nav: false,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      autoplay: true,
    });

    /*==============================
      Slick Nav
    ================================*/
    var $ourmenu = $('#ourmenu');
    $ourmenu.slicknav();

    /*==============================
      password strength meter script
    ================================*/
    var strength = {
      0: 'Worst ☹',
      1: 'Bad ☹',
      2: 'Weak ☹',
      3: 'Good ☺',
      4: 'Strong ☻',
    };

    var password = document.getElementById('password');
    var meter = document.getElementById('password-strength-meter');
    var text = document.getElementById('password-strength-text');

    password.addEventListener('input', function () {
      var val = password.value;
      var result = zxcvbn(val);

      // Update the password strength meter
      meter.value = result.score;

      // Update the text indicator
      if (val !== '') {
        text.innerHTML =
          'Strength: ' +
          '<strong>' +
          strength[result.score] +
          '</strong>' +
          "<span class='feedback'>" +
          result.feedback.warning +
          ' ' +
          result.feedback.suggestions +
          '</span';
      } else {
        text.innerHTML = '';
      }
    });
  });

  jQuery(window).on('load', function () {});
})(jQuery);
