import 'jquery';
import '../css/grid.scss';
import '../css/fonts.scss';
import '../css/styles.scss';
import '../css/responsive.scss';

$(document).ready(function() {

  $(window).on('scroll', function () {

        var vScroll = $(window).scrollTop();

        if (vScroll > 500) {
          $('.navbar-logo').addClass('show');
        }
        else {
          $('.navbar-logo').removeClass('show');
        }

    });

    $('.menu-button').click(function() {
        $('nav').toggleClass('mobile');
    });

});
