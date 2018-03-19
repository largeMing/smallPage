/**
 * Created by Administrator on 2017/12/26/026.
 */
$(function () {
    $("[type=password]").keyup(function () {
        $("#events").append("keyup ");
    }).keydown(function (e) {
        $("#events").append("keydown ");
    }).keypress(function () {
        $("#events").append("keypress ");
    });
    $(document).keydown(function (event) {
        if (event.keyCode == "13") {
            alert("确认要提交么?");
        }
    });
});