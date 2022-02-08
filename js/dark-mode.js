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