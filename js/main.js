$(function (){

    $(".head_inner nav ul li.switch a").on("click", function(e){
       $("body").toggleClass("switchMode");
        var src = ($("#my_image").attr("src") === "img/logo.png")
            ? "img/logo_white.png"
            : "img/logo.png";
        $("#my_image").attr("src", src);
       e.preventDefault();
    });

});

let header__burger = document.querySelectorAll('.header__burger,.header__link');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');

header__burger.forEach(function (item) {
    item.onclick = function () {
        item.classList.toggle('active');
        header_menu.classList.toggle('active');
        back.classList.toggle('lock');
    }
});