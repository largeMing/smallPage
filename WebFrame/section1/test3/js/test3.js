$(function () {
    var state = 0;
    $(".menu").click(function () {
        if (state == 0){
            $(".nav-box").addClass("nav-box-show");
            state = 1;
        } else {
            $(".nav-box").removeClass("nav-box-show");
            state = 0;
        }
    })
})