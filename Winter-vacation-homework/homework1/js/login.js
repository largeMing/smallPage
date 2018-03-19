/**
 * Created by Administrator on 2018/2/13/013.
 */
$(function () {
    $(".login-way-def").click(function () {
        if ($(this).index()==0) {
            $(".main-content-form").show();
            $(".main-content-form-phone").hide();
            $(this).addClass("login-way-pitch");
            $(this).siblings().removeClass("login-way-pitch")
        } else {
            $(".main-content-form").hide();
            $(".main-content-form-phone").show();
            $(this).addClass("login-way-pitch");
            $(this).siblings().removeClass("login-way-pitch")
        }
    })
});