$(document).ready(function(){
    let headerHeight = $('.header_head').outerHeight();
    $('.header__link').click(function(e){
        let linkHref = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);
        e.preventDefault();
    })
});