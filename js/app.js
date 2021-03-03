(function ($, root, undefined) {
    $(function () {
        'use strict';
        jQuery('button.switch-mode').on('click', function () {
            let currentTheme = jQuery('html').attr('theme');
            if (currentTheme === 'light') {
                jQuery('html').attr('theme', 'dark');
            } else {
                jQuery('html').attr('theme', 'light');
            }
        });
    });
})(jQuery, this);
