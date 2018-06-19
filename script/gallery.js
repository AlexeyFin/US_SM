
$(function(){

    $('.thumbnail').viewbox();
    $('.thumbnail-2').viewbox();

    (function(){
        let vb = $('.popup-link').viewbox();
        $('.popup-open-button').click(function(){
            vb.trigger('viewbox.open');
        });
        $('.close-button').click(function(){
            vb.trigger('viewbox.close');
        });
    })();

});
