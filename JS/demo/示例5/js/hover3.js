/**
 * Created by Administrator on 2017/12/21/021.
 */
$(document).ready(function () {
    $("li").mouseover(function () {
        $(this).css({"background": "orange"});
        $(this).children("div").show();
    }).mouseout(function () {
        $(this).css({"background": "none"});
        $(this).children("div").hide();
    })
});