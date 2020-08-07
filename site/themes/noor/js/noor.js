(($, Drupal) => {
    'use strict';

    $(document).ready(() => {
        $('.menu-menu').on('click', () => {
            $('.region-mobile-menu').slideToggle();
        });
    });
})(jQuery, Drupal);