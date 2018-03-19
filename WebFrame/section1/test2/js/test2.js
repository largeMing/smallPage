$(function () {
    var state = 0;
    $(".menu").click(function () {
        if (state == 0){
            $(".box-ul").addClass("box-ul-show");
            state = 1;
        } else {
            $(".box-ul").removeClass("box-ul-show");
            state = 0;
        }
    })
})