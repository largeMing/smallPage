/**
 * Created by Administrator on 2018/1/11/011.
 */

$(document).ready(function () {
    /*绑定失去焦点事件*/
    $("#userName").blur(userNameBlur);
    $("#pwd").blur(pwdBlur);
    $("#repwd").blur(repwdBlur);
    $("#nickName").blur(nickNameBlur);
    $("#tel").blur(telBlur);
    $("#email").blur(emailBlur);

    /*提交表单,验证*/
    $("#registerForm").submit(function () {
        var flag = true;
        if (!userNameBlur()) flag = false;
        if (!pwdBlur()) flag = false;
        if (!repwdBlur()) flag = false;
        if (!nickNameBlur()) flag = false;
        if (!telBlur()) flag = false;
        if (!emailBlur()) flag = false;
        return flag;
    });

    /*用户名获取焦点后*/
    var $userDiv = $("#userNameId");//获取用户名的提示标签
    $("#userName").focus(function () {
        $userDiv.removeClass("error_prompt ok_prompt").addClass("import_prompt");//给提示标签添加提示文本的样式
        $userDiv.html("请输入长度为4-18位的,由字母、数字、下划线、点、减号组成的，只能以数字、字母开头或结尾。");
    });
    /*用户名失去焦点*/
    function userNameBlur() {
        var $userName = $("#userName");//获取用户名文本框
        $userDiv.removeClass("import_prompt").addClass("error_prompt");//删除提示文本的样式,添加不符合要求时的样式
        var userNameReg = /(^[a-zA-Z0-9][a-zA-Z0-9_.-]{3,16})[a-zA-Z0-9]$/;//用户名正则
        if ($userName.val() == "") {
            $userDiv.html("用户名不能为空");
            return false;
        } else if (userNameReg.test($userName.val()) == false) {
            $userDiv.html("1、由字母、数字、下划线、点、减号组成<br/>" + "2、只能以数字、字母开头或结尾，且长度为4-18位");
            return false;
        }
        $userDiv.removeClass("error_prompt").addClass("ok_prompt");//删除不符合要求时的样式,添加输入正确时的样式
        $userDiv.html("用户名输入正确");
        return true;
    }

    /*密码框获得焦点时*/
    var $pwdDiv = $("#pwdId");//获取密码的提示标签
    $("#pwd").focus(function () {
        $pwdDiv.removeClass("error_prompt ok_prompt").addClass("import_prompt");//给提示标签添加提示文本的样式
        $pwdDiv.html("请输入长度为4-16位的密码");
    });
    /*密码框失去焦点时*/
    function pwdBlur() {
        var $pwd = $("#pwd");//获取密码文本框
        $pwdDiv.removeClass("import_prompt").addClass("error_prompt");//删除提示文本的样式,添加不符合要求时的样式
        var pwdReg = /[A-Za-z0-9]{6,16}/;//密码的正则
        if ($pwd.val() == "") {
            $pwdDiv.html("密码不能为空");
            return false;
        } else if (pwdReg.test($pwd.val()) == false) {
            $pwdDiv.html("密码长度为6-16位");
            return false;
        }
        $pwdDiv.removeClass("error_prompt").addClass("ok_prompt");//删除不符合要求时的样式,添加输入正确时的样式
        $pwdDiv.html("密码输入正确");
        return true;
    }

    /*重复登录密码获取焦点时*/
    var $repwdDiv = $("#repwdId");//获取重复登录密码提示标签
    $("#repwd").focus(function () {
        $repwdDiv.removeClass("error_prompt ok_prompt").addClass("import_prompt");//给提示标签添加提示文本的样式
        $repwdDiv.html("请再次输入密码");
    });
    /*重复登录密码失去焦点时*/
    function repwdBlur() {
        var $pwd = $("#pwd");//获取密码文本框
        var $repwd = $("#repwd");//获取重复登录密码文本框
        $repwdDiv.removeClass("import_prompt").addClass("error_prompt");//删除提示文本的样式,添加不符合要求时的样式
        if ($repwd.val() == "") {
            $repwdDiv.html("重复输入的密码不能为空");
            return false;
        } else if ($pwd.val() !== $repwd.val()) {
            $repwdDiv.html("两次输入的密码不一致");
            return false;
        }
        $repwdDiv.removeClass("error_prompt").addClass("ok_prompt");//删除不符合要求时的样式,添加输入正确时的样式
        $repwdDiv.html("输入密码一致");
        return true;
    }

    /*昵称获取焦点*/
    var $nickNameIdDiv = $("#nickNameId");//获取昵称提示标签
    $("#nickName").focus(function () {
        $nickNameIdDiv.removeClass("error_prompt ok_prompt").addClass("import_prompt");//给提示标签添加提示文本的样式
        $nickNameIdDiv.html("请输入以汉字、字母、数字、下划线,特殊字符组成的长度4-20个字符的昵称");
    });
    /*昵称失去焦点*/
    function nickNameBlur() {
        var $nickName = $("#nickName");//获取昵称文本框
        $nickNameIdDiv.removeClass("import_prompt").addClass("error_prompt");//删除提示文本的样式,添加不符合要求时的样式
        // var nickNameReg = ;//昵称正则表达式
        if ($nickName.val() == "") {
            $nickNameIdDiv.html("昵称不能为空");
            return false;
        } /*else if (nickNameReg.test($nickName.val()) == false) {
            $nickNameIdDiv.html("1、昵称以汉字、字母、数字、下划线,以及@、！、#、%、&、*、$等特殊字符组成<br/>2、长度4-20个字符,一个汉字占两个字符");
            return false;
        }*/
        $nickNameIdDiv.removeClass("error_prompt").addClass("ok_prompt");//删除不符合要求时的样式,添加输入正确时的样式
        $nickNameIdDiv.html("昵称输入正确");
        return true;
    }

    /*手机号获取焦点*/
    var $telIdDiv = $("#telId");//获取手机号提示标签
    $("#tel").focus(function () {
        $telIdDiv.removeClass("error_prompt ok_prompt").addClass("import_prompt");//给提示标签添加提示文本的样式
        $telIdDiv.html("请输入以13、15、18开头的11位数的手机号");
    });
    /*手机号失去焦点*/
    function telBlur() {
        var $tel = $("#tel");//获取手机号文本框
        $telIdDiv.removeClass("import_prompt").addClass("error_prompt");//删除提示文本的样式,添加不符合要求时的样式
        var telReg = /^1[358]\d{9}/;//手机号正则
        if ($tel.val() == "") {
            $telIdDiv.html("手机号不能为空");
            return false;
        } else if (telReg.test($tel.val()) == false) {
            $telIdDiv.html("必须以13、15、18开头的11位数的手机号");
            return false;
        }
        $telIdDiv.removeClass("error_prompt").addClass("ok_prompt");//删除不符合要求时的样式,添加输入正确时的样式
        $telIdDiv.html("手机号输入正确");
        return true;
    }

    /*邮箱获得焦点*/
    var $emailIdDiv = $("#emailId");//获取手机号提示标签
    $("#email").focus(function () {
        $emailIdDiv.removeClass("error_prompt ok_prompt").addClass("import_prompt");//给提示标签添加提示文本的样式
        $emailIdDiv.html("请输入常用的邮箱地址");
    });
    /*手机号失去焦点*/
    function emailBlur() {
        var $email = $("#email");//获取邮箱文本框
        $emailIdDiv.removeClass("import_prompt").addClass("error_prompt");//删除提示文本的样式,添加不符合要求时的样式
        var emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;//邮箱正则
        if ($email.val() == "") {
            $emailIdDiv.html("邮箱不能为空");
            return false;
        } else if (emailReg.test($email.val()) == false) {
            $emailIdDiv.html("请输入正确的邮箱地址");
            return false;
        }
        $emailIdDiv.removeClass("error_prompt").addClass("ok_prompt");//删除不符合要求时的样式,添加输入正确时的样式
        $emailIdDiv.html("邮箱输入正确");
        return true;
    }
});
