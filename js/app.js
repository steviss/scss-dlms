(function ($, root, undefined) {
    $(function () {
        'use strict';
        let openSansTiles = ['os-one', 'os-two', 'os-three', 'os-four', 'os-five', 'os-six', 'os-seven', 'os-eight', 'os-nine', 'os-ten'],
            robotoTiles = ['r-one', 'r-two', 'r-three', 'r-four', 'r-five', 'r-six', 'r-seven', 'r-eight', 'r-nine', 'r-ten', 'r-eleven', 'r-twelve'],
            merriweatherTiles = ['m-one', 'm-two', 'm-three', 'm-four', 'm-five', 'm-six', 'm-seven', 'm-eight'];
        let colorTiles = [...openSansTiles, ...robotoTiles, ...merriweatherTiles];
        let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
        let colors = jQuery('.colors');
        let currentMode = jQuery('.current-mode');
        jQuery('button.switch-mode').on('click', function () {
            let currentTheme = jQuery('html').attr('theme');
            if (currentTheme === 'light') {
                jQuery('html').attr('theme', 'dark');
                currentMode.text('Dark Theme');
            } else {
                jQuery('html').attr('theme', 'light');
                currentMode.text('Light Theme');
            }
        });
        colorTiles.forEach((tile) => {
            let div = jQuery('<div />', { class: `color color-${tile}` }),
                p = jQuery('<p />').text(loremIpsum),
                article = jQuery('<article />');
            article.append(p);
            div.append(article);
            colors.append(div);
        });
    });
})(jQuery, this);
