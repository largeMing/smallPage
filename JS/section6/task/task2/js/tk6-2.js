/**
 * Created by Administrator on 2017/12/25/025.
 */
$(function () {
    $("a").click(function () {
        $("span:hidden").show();
    });
    $("span").click(function () {
        $("span:visible").hide();
    });
});