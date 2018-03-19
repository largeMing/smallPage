/**
 * Created by Administrator on 2017/12/23/023.
 */

$(function () {
    $("h2").click(function () {
        $("span[class]").css({"font-weight": "bold", "color": "#f09"});
    });
    $("span[class=director]").click(function () {
        $(this).next().css("font-weight", "bold");
    });
    $("span[class=bq]").click(function () {
        $(this).nextAll("a").css({"background": "#e0f8ea", "color": "#10a14b", "padding": "2px 8px"})
    });
    $("input[alt=收藏本片]").click(function () {
        alert("您已收藏成功!");
    });
});
