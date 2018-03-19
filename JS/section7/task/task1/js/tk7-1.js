/**
 * Created by Administrator on 2017/12/28/028.
 */
$(function () {
    $("dt").click(function () {
        $("dd").toggle();
    });
    $("dd").hover(function () {
        $(this).css("background","#333");
    },function () {
        $(this).css("background","none");
    });
});