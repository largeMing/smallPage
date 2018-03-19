/**
 * Created by Administrator on 2017/12/28/028.
 */
$(function () {
    $(".header-r-ul>li:eq(4)").hover(function () {
        $(this).has("ul").children("ul").show("slow");
    },function () {
        $(this).has("ul").children("ul").hide("fast");
    });
    $(".article-ul>li:eq(1)").click(function () {
        $(this).has("ul").children("ul").toggle("slow");
    });
});