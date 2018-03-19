/**
 * Created by Administrator on 2017/12/23/023.
 */
$(function () {
    $("p").click(function () {
       $(".current").css("background","#6ff");
       $("p span").css("background","#f9f");
       $("h1+p").css("background","#ff6");
       $("#content>span>span").css({"color":"#fff","background":"#f00"});
    });
});