/**
 * Created by Administrator on 2018/1/17/017.
 */
$(document).ready(function () {
    $(".adver").mouseover(function () {
        $(".arrowLeft").show();
        $(".arrowRight").show();
    })
    $(".adver").mouseout(function () {
        $(".arrowLeft").hide();
        $(".arrowRight").hide();
    })
});