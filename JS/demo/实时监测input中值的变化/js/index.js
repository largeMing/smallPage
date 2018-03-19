/**
 * Created by Administrator on 2018/1/17/017.
 */
$(document).ready(function () {
    $("#userInput").bind("input propertychange",function () {
        alert($("#userInput").val());
    })

});

