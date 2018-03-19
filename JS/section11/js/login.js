/**
 * Created by Administrator on 2018/1/18/018.
 */
$(document).ready(function () {
    /*Email文本框获取和失去焦点时*/
    $("#email").focus(function () {
        $(this).removeClass("login_content_input").addClass("login_content_input_Focus")
    })
    $("#email").blur(function () {
        $(this).removeClass("login_content_input_Focus");
        if ($(this).val() == ""){
            alert("输入不能为空");
            $(this).addClass("login_content_input");
            $(this).css("border","solid 1px red")
        } else {
            $(this).addClass("login_content_input");
            $(this).css("border","solid 1px #999");
        }
    })

    /*密码文本框获取和失去焦点时*/
    $("#pwd").focus(function () {
        $(this).removeClass("login_content_input").addClass("login_content_input_Focus")
    })
    $("#pwd").blur(function () {
        $(this).removeClass("login_content_input_Focus").addClass("login_content_input")
    })

    /*登录按钮*/
    $("#btn").hover(function () {
        $(this).removeClass("login_btn_out").addClass("login_btn_over")
    }, function () {
        $(this).removeClass("login_btn_over").addClass("login_btn_out")
    })
    /*快速注册新用户*/
    $("#quick_register").hover(function () {
        $(this).removeClass("login_register_out").addClass("login_register_over")
    }, function () {
        $(this).removeClass("login_register_over").addClass("login_register_out")
    })
});