/**
 * Created by Administrator on 2017/12/26/026.
 */
$(function () {
    $("#nav li").mouseover(function () {
        $(this).has("p").children("p").show();
    }).mouseout(function () {
        $(this).has("p").children("p").hide();
    });
});