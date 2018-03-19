/**
 * Created by Administrator on 2018/1/9/009.
 */

$(document).ready(function () {
    //绑定失去焦点事件
    $("#fname").blur(checkFname); //名字
    $("#lname").blur(checkLname); //姓氏
    $("#pass").blur(checkPass);   //密码
    $("#rpass").blur(checkRpass); //再次输入密码
    $("#email").blur(checkEmail); //电子邮箱

    //提交表单,调用验证函数
    $("#formRegister").submit(function () {
        var flag = true;
        if (!checkFname()) flag = false;
        if (!checkLname()) flag = false;
        if (!checkPass()) flag = false;
        if (!checkRpass()) flag = false;
        if (!checkEmail()) flag = false;
        return flag;
    });

    /*名字和姓氏均不能为空,且不能有数字*/
    function checkFname() {
        var $userFname = $("#fname");// 获取名字的文本框
        var $divFname = $("#DivFname");// 获取名字的提示信息标签
        $divFname.html("");// 初始化名字的提示信息
        /*判断名字内容不能为空*/
        if ($userFname.val() == "") {
            $divFname.html("名字不能为空");
            return false;
        }
        for (var i = 0; i < $userFname.val().length; i++) {
            var j = $userFname.val().substring(i, i + 1);//循环截取名字文本框内的单个字符
            if (isNaN(j) == false) {
                $divFname.html("名字中不能包含数字");
                return false;
            }
        }
        return true;
    }

    /*名字和姓氏均不能为空,且不能有数字*/
    function checkLname() {
        var $userLname = $("#lname");// 获取姓氏的文本框;
        var $divName = $("#DivName");// 获取姓氏的提示标签
        $divName.html("");// 初始化姓氏的提示信息
        /*判断姓氏不能为空*/
        if ($userLname.val() == "") {
            $divName.html("姓氏不能为空");
            return false;
        }
        /*判断姓氏不能包含数字*/
        for (var i = 0; i < $userLname.val().length; i++) {
            var j = $userLname.val().substring(i, i + 1);// 循环截取姓氏文本框内的单个字符
            if (isNaN(j) == false) {
                $divName.html("姓氏中不能包含数字");
                return false;
            }
        }
        return true;
    }

    /*密码不能少于六位,两次输入的密码必须相同*/
    function checkPass() {
        var $userPass = $("#pass");// 获取密码框
        var $divPwd = $("#DivPwd");// 获取密码框的提示标签
        $divPwd.html("");// 初始化密码的提示信息
        if ($userPass.val() == "") {
            $divPwd.html("密码不能为空");
            return false;
        } else if ($userPass.val().length < 6) {
            $divPwd.html("密码必须大于或等于6个字符");
            return false;
        }
        return true;
    }

    /*再次输入密码*/
    function checkRpass() {
        var $userPass = $("#pass");// 获取密码框
        var $userRpass = $("#rpass");// 获取再次输入密码的文本框
        var $divRepwd = $("#DivRepwd");// 获取再次输入密码的提示标签
        $divRepwd.html("");// 初始化再次输入密码的提示信息
        if ($userRpass.val().length == "") {
            $divRepwd.html("不能为空");
            return false;
        } else if ($userPass.val() != $userRpass.val()) {
            $divRepwd.html("两次输入密码不一致");
            return false;
        }
        return true;
    }

    /*电子邮箱不能为空,必须包含符号"@"和"."*/
    function checkEmail() {
        var $userEmail = $("#email");// 获取邮箱文本框
        var $divEmail = $("#DivEmail");// 获取邮箱提示标签
        $divEmail.html("");// 初始化邮箱提示信息
        if ($userEmail.val() == "") {
            $divEmail.html("电子邮箱不能为空");
            return false;
        } else if ($userEmail.val().indexOf("@") == -1 || $userEmail.val().indexOf(".") == -1) {
            $divEmail.html("电子邮箱必须包含符号'@'和'.'");
            return false;
        }
        return true;
    }
});
