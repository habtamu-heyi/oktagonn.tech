/**
 * @file
 * Main client-side processing for ins personalization.
 */

(function ($, Drupal, drupalSettings, cookies) {
    Drupal.behaviors.ins_personalization = {
      attach: function (context, settings) {
        if (typeof cookies.get('ins_visitor') === 'undefined'){
          cookies.set('ins_visitor', 'returning');
        }
        $('.menu-item > a').on('click', function (e) {
          if (this.closest('li').hasAttribute('data-cookie-value')) {
            let cookie_val = this.closest('li').getAttribute('data-cookie-value');
            cookies.set('ins_segment', cookie_val);
          }
        });
    }
  };

})(jQuery, Drupal, drupalSettings, window.Cookies);
