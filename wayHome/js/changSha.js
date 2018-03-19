/**
 * Created by Administrator on 2018/1/5/005.
 */
$(function () {
    $(".fixed-l").click(function () {
        $(this).animate({left: "-125px"}, 500);
        $(".fixed-l-2").animate({left: "0"}, 2000);
    });
    $(".close").click(function () {
        $(".fixed-l").animate({left: "0"}, 2500);
        $(".fixed-l-2").animate({left: "-2000px"}, 1000);
    });
});