jQuery(document).ready(function($) {
    $(window).on('load', function() {
        setTimeout(function() {
            $('#preloader').fadeOut('slow', function() {});
        }, 1000);
    });
});