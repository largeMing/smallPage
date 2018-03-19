/**
 * Created by Administrator on 2018/1/11/011.
 */

$(document).ready(function () {
    $(".btn").click(function () {
        /*验证用户名*/
        var myUser = document.getElementById("user");
        if (myUser.validity.valueMissing == true) {
            myUser.setCustomValidity("用户名不能为空");
        } else if (myUser.validity.patternMismatch == true) {
            myUser.setCustomValidity("用户名必须是字开头的4-16位的英文字母和数字");
        } else {
            myUser.setCustomValidity("");
        }

        /*验证密码*/
        var myPwd = document.getElementById("pwd");
        if (myPwd.validity.valueMissing == true) {
            myPwd.setCustomValidity("密码不能为空");
        } else if (myPwd.validity.patternMismatch == true) {
            myPwd.setCustomValidity("密码必须是由英文和数字组成的4-10位的字符")
        } else {
            myPwd.setCustomValidity("");
        }

        /*确认密码*/
        var myRepwd = document.getElementById("repwd");
        if (myRepwd.validity.valueMissing == true) {
            myRepwd.setCustomValidity("确认密码不能为空");
        } else if (myPwd.value != myRepwd.value) {
            myRepwd.setCustomValidity("两次输入的密码不相同");
        } else {
            myRepwd.setCustomValidity("");
        }

        /*手机号码*/
        var myMobile = document.getElementById("mobile");
        if (myMobile.validity.valueMissing == true) {
            myMobile.setCustomValidity("手机号码不能为空");
        } else if (myMobile.validity.patternMismatch == true) {
            myMobile.setCustomValidity("必须是以1开头的11位数字");
        } else {
            myMobile.setCustomValidity("");
        }

        /*生日*/
        var myBirth = document.getElementById("birth");
        if (myBirth.validity.valueMissing == true) {
            myBirth.setCustomValidity("生日不能为空");
        } else if (myBirth.validity.patternMismatch == true) {
            myBirth.setCustomValidity("生日的格式必须是1900-5-8或者1988-05-08");
        } else {
            myBirth.setCustomValidity("");
        }
    });
});
