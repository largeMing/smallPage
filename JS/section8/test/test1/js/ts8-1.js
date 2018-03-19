/**
 * Created by Administrator on 2018/1/3/003.
 */

$(function () {
    $(".top-div").mouseover(function () {
        $(this).addClass("new-top-div");
    });
    $(".top-div").mouseout(function () {
        $(this).removeClass("new-top-div");
    });
});
