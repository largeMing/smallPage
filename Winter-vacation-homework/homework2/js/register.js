$(document).ready(function () {
    $("#Set").click(function () {
        var number = document.getElementById("Number");
        if (number.validity.valueMissing == true) {
            number.setCustomValidity("手机号不能为空");
        }
        else if (number.validity.patternMismatch == true) {
            number.setCustomValidity("手机号必须为1开头的11位数字");
        }
        else {
            number.setCustomValidity("")
        }
        var test = document.getElementById("Test");
        if (test.validity.valueMissing == true) {
            test.setCustomValidity("图形码不能为空");
        }
        else {
            test.setCustomValidity("")
        }
        var mail = document.getElementById("Mail");
        if (mail.validity.valueMissing == true) {
            mail.setCustomValidity("邮箱不能为空");
        }
        else if (mail.validity.patternMismatch == true) {
            mail.setCustomValidity("邮箱格式必须正确");
        }
        else {
            mail.setCustomValidity("");
        }
        var user = document.getElementById("User");
        if (user.validity.valueMissing == true) {
            user.setCustomValidity("用户名不能为空");
        }
        else if (user.validity.patternMismatch == true) {
            user.setCustomValidity("用户名必须是4~16个字符的英文和数字,并且由英文开头");
        }
        else {
            user.setCustomValidity("")
        }
        var birth = document.getElementById("Birth");
        if (birth.validity.valueMissing == true) {
            birth.setCustomValidity("生日不能为空");
        }
        else if (birth.validity.patternMismatch == true) {
            birth.setCustomValidity("生日格式不正确");
        }
        else {
            birth.setCustomValidity("");
        }
        var pwd = document.getElementById("Pass");
        if (pwd.validity.valueMissing == true) {
            pwd.setCustomValidity("密码不能为空");
        }
        else if (pwd.validity.patternMismatch == true) {
            pwd.setCustomValidity("密码必须是4~10个字符的英文和数字");
        }
        else {
            pwd.setCustomValidity("");
        }
        var pwd2 = document.getElementById("Pass2");
        if (pwd2.validity.valueMissing == true) {
            pwd2.setCustomValidity("密码不能为空");
        }
        else if (pwd2.validity.patternMismatch == true) {
            pwd2.setCustomValidity("密码必须是4~10个字符的英文和数字");
        }
        else if (pwd.value != pwd2.value) {
            pwd2.setCustomValidity("两次密码必须一致");
        }
        else {
            pwd2.setCustomValidity("");
        }
    });
});