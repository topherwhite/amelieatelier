function headadjuster() {
    $('.product-comparison .head').each(function(){
        if ( $(this).find(".ribbon").length === 0 ) {
            $(this).removeClass('height-fix');
            $(this).removeClass('two-liner');
            if ( $(this).height() > 30 ) {
                $(this).addClass('two-liner');
            }
            $(this).addClass('height-fix');
        }
    });
}

$('document').ready(function(){
    $('.product-comparison').each(function(){
        var captions = $('.captions', this).clone();
        captions.addClass("visible-sm visible-xs");
        $('.data', this).slice(1).before(captions);
    });
    headadjuster();
});

$( window ).resize(function() {
    headadjuster();
});