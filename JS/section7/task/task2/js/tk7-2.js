/**
 * Created by Administrator on 2017/12/28/028.
 */


$(function () {
    $(".arr").click(function () {
        $("ul li:gt(6)").toggle("slow");
        $(this).toggleClass("new-arr");
        $(".ul-box").toggleClass("new-ul-box");
    });
});

