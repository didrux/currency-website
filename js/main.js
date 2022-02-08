$(function (){

    $(".head_inner nav ul li.switch a").on("click", function(e){
       $("body").toggleClass("switchMode");
        let src = ($("#my_image").attr("src") === "img/logo.png")
            ? "img/logo_white.png"
            : "img/logo.png";
        $("#my_image").attr("src", src);
       e.preventDefault();
    });

});

let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__link = document.querySelectorAll('.header__link');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__link.forEach(function (item) {
    item.onclick = function () {
        header__burger.classList.toggle('active');
        header_menu.classList.toggle('active');
        back.classList.toggle('lock');
    }
});


$(document).ready(function(){

    let headerHeight = $('.header_head').outerHeight();

    $('.header__link').click(function(e){

        let linkHref = $(this).attr('href');

        $('html,body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();

    })

})