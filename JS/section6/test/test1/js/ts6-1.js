/**
 * Created by Administrator on 2017/12/23/023.
 */
$(function () {
    $(".intro").css("color", "red");
    $("#jdPrice>span").css({"color": "red", "font-weight": "bold", "font-size": "24px"});
    $(".jdP").css("color", "#ccc");
    $(".jdP span").css("text-decoration", "line-through");
    $("dl").css("color", "red");
    $("dd span,#ticket span").css({"color": "#fff", "background": "red", "padding": "1px 5px", "margin-right": "5px"})
});
$(function () {
    $("dt").click(function () {
        $("dd").show();
    });
});
