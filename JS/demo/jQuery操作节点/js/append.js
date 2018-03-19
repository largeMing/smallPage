/**
 * Created by Administrator on 2018/1/4/004.
 */


$(document).ready(function () {
    var $newNode1 = $("<li>你喜欢那些冬季运动项目?</li>");
    var $newNode2 = $("<li>北京申办冬奥会是再适合不过了!</li>");
    var $newNode3 = $("<li>北京冬残会筹备工作在京举行</li>");
    var $newNode4 = $("<li>北京奥林匹克塔奥运五环标志落成!</li>");
    /*$("ul").append($newNode1);//插入到ul内的后面
    $("ul").prepend($newNode2);//插入到ul内的前面
    $("ul").after($newNode3);//插入到ul外的后面
    $("ul").before($newNode4);//插入到ul外的前面*/
    // $("ul li:eq(0)").replaceWith($newNode4);//将ul里面的第一个li节点替换成$newNode4;
    $("ul li:eq(2)").click(function () {
        $(this).clone(true).appendTo("ul");
    });
    $("ul li:eq(3)").click(function () {
        $(this).clone(false).appendTo("ul");
    });
    $(".btn").click(function () {
        $("ul li:eq(0)").remove();
    });
    $(".btn2").click(function () {
        $("ul li:eq(1)").empty();
    });
    $("ul li:last").css("border", "none");
    // $(".gameList li").first().css("background","#b8e7f9").end().last().css("background","#d3f4b5");
});