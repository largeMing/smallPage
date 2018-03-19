/**
 * Created by Administrator on 2018/1/10/010.
 */

$(document).ready(function () {
    /*绑定失去焦点事件*/
    $("#user").blur(checkUser);//用户名
    $("#pwd").blur(checkPwd);//密码
    $("#repwd").blur(checkRepwd);//确认密码
    $("#email").blur(checkEmail);//电子邮箱
    $("#mobile").blur(checkMobile);//手机号码
    $("#birth").blur(checkBirth);//生日

    /*提交表单,调用验证函数*/
    $("#myform").submit(function () {
        var flag = true;
        if (!checkUser()) flag = false;
        if (!checkPwd()) flag = false;
        if (!checkRepwd()) flag = false;
        if (!checkEmail()) flag = false;
        if (!checkMobile()) flag = false;
        if (!checkBirth()) flag = false;
        return flag;
    });

    /*用户名只能由英文字母和数字组成,长度为4~16位字符,并且以英文字母开头*/
    function checkUser() {
        var myUser = $("#user");//获取用户名文本框
        var userDiv = $("#user_prompt");//获取用户名提示标签
        var userReg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;//用户名的正则表达式
        if (myUser.val() == "") { //判断是否为空
            userDiv.html("用户名不能为空");
            return false;
        } else if (userReg.test(myUser.val()) == false) { //判断是否符合正则
            userDiv.html("用户名由英文字母和数字组成的长度为4-16位字符,以字母开头");
            return false;
        }
        userDiv.html("√");
        return true;
    }

    /*密码只能由英文字母和数字组成,长度为4~10位字符*/
    function checkPwd() {
        var myPwd = $("#pwd");//获取密码文本框
        var pwdDiv = $("#pwd_prompt");//获取密码提示标签
        var pwdReg = /^$[a-zA-Z0-9]{4,10}/;//密码的正则表达式
        if (myPwd.val() == "") {//判断密码是否为空
            pwdDiv.html("密码不能为空");
            return false;
        } else if (pwdReg.test(myPwd.val())) {
            pwdDiv.html("密码由英文字和数字组成的4-10位字符");
            return false;
        }
        pwdDiv.html("√");
        return true;
    }

    /*确认密码*/
    function checkRepwd() {
        var myPwd = $("#pwd");//获取密码文本框
        var myRepwd = $("#repwd");//获取确认密码文本框
        var repwdDiv = $("#repwd_prompt");//获取确认密码提示标签
        if (myRepwd.val() == "") {//判断确认密码是否为空
            repwdDiv.html("密码不能为空");
            return false;
        } else if (myPwd.val() != myRepwd.val()) {//判断两次输入的密码是否相同
            repwdDiv.html("两次输入的密码不同");
            return false;
        }
        repwdDiv.html("√");
        return true;
    }

    /*判断电子邮箱的格式*/
    function checkEmail() {
        var myEmail = $("#email");//获取电子邮箱文本框
        var emailDiv = $("#email_prompt");//获取电子邮箱提示标签
        var emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;//电子邮箱正则表达式
        if (myEmail.val() == "") {//判断电子邮箱是否为空
            emailDiv.html("电子邮箱不能为空");
            return false;
        } else if (emailReg.test(myEmail.val()) == false) {//判断电子邮箱的格式是否正确
            emailDiv.html("电子邮箱格式不正确");
            return false;
        }
        emailDiv.html("√");
        return true;
    }

    /*手机号码只能是1开头的11位数*/
    function checkMobile() {
        var myMobile = $("#mobile");//获取手机号码文本框
        var mobileDiv = $("#mobile_prompt");//获取手机号码提示标签
        var mobileReg = /[1][0-9]{10}$/;//手机号码正则表达式
        if (myMobile.val() == "") {//判断手机号码是否为空
            mobileDiv.html("手机号码不能为空");
            return false;
        } else if (mobileReg.test(myMobile.val()) == false) {
            mobileDiv.html("手机号码只能是1开头的11位数");
            return false;
        }
        mobileDiv.html("√");
        return true;
    }

    /*生日的年份为1900-2016,生日格式为19980-5-12或1988-05-04的形式*/
    function checkBirth() {
        var myBirth = $("#birth"); //获取生日文本框
        var birthDiv = $("#birth_prompt");//获取生日提示标签
        var birthReg = /^(19\d{2})|(200\d)|(201[0-8])-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/;//生日正则表达式
        if (myBirth.val() == "") {//判断生日是否为空
            birthDiv.html("生日不能为空");
            return false;
        } else if (birthReg.test(myBirth.val()) == false) {
            birthDiv.html("生日格式为19980-5-12或1988-05-04的形式");
            return false;
        }
        birthDiv.html("√");
        return true;
    }
});