/**
 * Created by Administrator on 2017/12/27/027.
 */
/*
* children() 方法返回返回被选元素的所有直接子元素。
* has() 将匹配元素集合缩减为拥有匹配指定选择器或 DOM 元素的后代的子集。
* */
$(function () {
    $("li").hover(function () {
        $(this).toggleClass("h-li");
        $(this).has("img").children("img").show();
    },function () {
        $(this).toggleClass("h-li");
        $(this).has("img").children("img").hide();
    });
});
