/**
 * Created by Administrator on 2018/1/17/017.
 */
$(document).ready(function () {
    $("#menu-ul").hide();
    $("#menu a").mousemove(function () {
        $("#menu-ul").show();
        $("#menu").css({border:"solid 1px #ee7304"})
    });
    $("#menu a").mouseout(function () {
        $("#menu-ul").hide();
        $("#menu").css({border:"none"})
    })
});