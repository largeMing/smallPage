/**
 * Created by Administrator on 2018/1/6/006.
 */

$(function () {
    $(".input1").click(function () {
        var childLen = $("body").children();
        alert(childLen.length);
    });
    $(".input2").click(function () {
        $("ul li:eq(0)").next().addClass("orange");
    });
    $(".input3").click(function () {
        $("ul li:eq(3)").prev().addClass("orange");
    });
    /* $("li:eq(2)").mouseover(function () {
     $(this).addClass("orange");
     $(this).siblings().css({background:"#f30",color:"#fff"});
     });*/
    // $("ul").find("li").eq(num).addClass("orange");
    var curIndex = 0;
    var liLen = $("ul li").length; //获取li个数
    $("li").hover(function () {
        $(this).addClass("orange");
        $(this).siblings().addClass("black");
    },function () {
        $(this).removeClass("orange");
        $(this).siblings().removeClass("black");
    });
});