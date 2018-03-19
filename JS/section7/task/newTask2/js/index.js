/**
 * Created by Administrator on 2018/1/22/022.
 */

$(function () {
    var scr = 0;
    $(".lastone").click(function () {
        if (scr == 0) {
            $(this).removeClass("lastone").addClass("up");
            $(".nav li:gt(6):not(.up)").hide();
            scr = 1
        } else {
            $(this).removeClass("up").addClass("lastone");
            $(".nav li:gt(6):not(.lastone)").show();
            scr = 0
        }
    });

});