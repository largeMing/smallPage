$(function () {
    $("#fname").blur(checkName)
    $("#lname").blur(checkLname)
    $("#sname").blur(checkSname)
    $("#pass").blur(checkpas)


    $("#formRegister").submit(function () {
        var flag = true;
        if (!$("#checkbox").is(":checked")) flag = false;
        if (!checkName()) flag = false
        if (!checkLname()) flag = false
        if (!checkSname()) flag = false
        if (!checkpas()) flag = false

        return flag;
    })

    function checkName() {
        var userFname = $("#fname").val()
        if (userFname == "") {
            $("#DivFname").html("名字不能为空");
            return false;
        }
        $("#DivFname").html("")
        return true;
    }

    function checkLname() {
        var userLname = $("#lname").val()
        if (userLname == "") {
            $("#DivName").html("姓氏不能为空")
            return false
        }
        $("#DivName").html("")
        return true
    }

    function checkSname() {
        var userSname = $("#sname")
        var reg = /^[a-z0-9_]{4,16}$/
        if (userSname.val() == "") {
            $("#DivSame").html("登录名不能为空")
            return false
        } else if (reg.test(userSname.val()) == false) {
            $("#DivSame").html("登录名不合法")
            return false
        }
        $("#DivSame").html("")
        return true
    }

    function checkpas() {
        var userPas = $("#pass")
        var reg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/
        if (userPas.val() == "") {
            $("#DivPwd").html("密码不能为空")
            return false
        } else if (reg.test(userPas.val()) == false) {
            $("#DivPwd").html("密码不合法,请重新输入")
            return false
        }
        $("#DivPwd").html("")
        return true;
    }
})