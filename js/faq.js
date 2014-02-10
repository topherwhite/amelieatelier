$('document').ready(function(){
    $('.faq .question .collapse').on('show.bs.collapse', function (n) {
      $(n.target).siblings('.faq-toggle').toggleClass('open');
    });

    $('.faq .question .collapse').on('hide.bs.collapse', function (n) {
        $(n.target).siblings('.faq-toggle').toggleClass('open');        
    });
});