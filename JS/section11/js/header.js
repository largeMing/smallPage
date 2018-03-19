/**
 * Created by Administrator on 2018/1/16/016.
 */
$(document).ready(function () {
    $("#menu").mouseenter(function () {
        $("#dd_menu_top_down").slideDown();
    });
    $("#menu").mouseleave(function () {
        $("#dd_menu_top_down").slideUp();
    })
});