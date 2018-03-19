/**
 * Created by Administrator on 2018/2/13/013.
 */
$(function () {
    $(".main-box img:not(:last)").hover(function () {
        $(this).addClass("opt-img");
    },function () {
        $(this).removeClass("opt-img");
    })
});