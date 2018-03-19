/**
 * Created by Administrator on 2017/12/11/011.
 */

//表单1提交验证
function checkForm() {
    if (changeName() && changePhone() && changePas() && changeVerification()) {
        return true;
    } else {
        return false;
    }
}

//验证用户名
function changeName() {
    var uFont = document.getElementsByClassName("not-font")[0];
    var uName = document.getElementById("in-name");
    var nameBox = document.getElementsByClassName("form-name")[0];
    var uNameV = uName.value;
    var zz = /^[0-9a-zA-Z]*$/g; //只能为数字和字母
    if (uNameV == "") {
        uFont.innerHTML = "用户名不能为空";
        nameBox.style.borderColor = "red";
        return false;
    } else if (uNameV.length < 6 || uNameV.length > 16) {
        uFont.innerHTML = "用户名长度为6~16位";
        nameBox.style.borderColor = "red";
        return false;
    } else if (!zz.test(uNameV)) {
        uFont.innerHTML = "用户名只能为数字和字母";
        nameBox.style.borderColor = "red";
        return false;
    }
    uFont.innerHTML = "√";
    nameBox.style.borderColor = "#BABABA";
    return true;
}

//验证手机号
function changePhone() {
    var uFont = document.getElementsByClassName("not-font")[1];
    var phoneBox = document.getElementsByClassName("form-phone")[0];
    var uPhone = document.getElementById("in-phone");
    var uPhoneV = uPhone.value;
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/; //手机号码正则
    if (uPhoneV == "") {
        uFont.innerHTML = "手机号不能为空";
        phoneBox.style.borderColor = "red";
        return false;
    } else if (!myreg.test(uPhoneV)) {
        uFont.innerHTML = "必须为13/14/15/17/18开头的手机号";
        phoneBox.style.borderColor = "red";
        return false;
    }
    uFont.innerHTML = "√";
    phoneBox.style.borderColor = "#BABABA";
    return true;
}

//验证密码
function changePas() {
    var uFont = document.getElementsByClassName("not-font")[2];
    var pasBox = document.getElementsByClassName("form-pas")[0];
    var uPhone = document.getElementById("in-pas");
    var uPhoneV = uPhone.value;
    var zz = /^[0-9a-zA-Z]*$/g; //只能为数字和字母
    if (uPhoneV == "") {
        uFont.innerHTML = "密码不能为空";
        pasBox.style.borderColor = "red";
        return false;
    } else if (uPhoneV.length < 6 || uPhoneV.length > 16) {
        uFont.innerHTML = "长度必须为6~16位";
        pasBox.style.borderColor = "red";
        return false;
    } else if (!zz.test(uPhoneV)) {
        uFont.innerHTML = "密码必须为数字+字母";
        pasBox.style.borderColor = "red";
        return false;
    }
    uFont.innerHTML = "√";
    pasBox.style.borderColor = "#BABABA";
    return true;
}

//获取验证码
function clickCode() {
    var arr = ["wfls", "lkjs", "iuqw", "pjsh", "uuhs", "lqkw", "adfs", "qwes", "sfxz", "qwet", "ojks", "yujs", "nmnz", "shnz", "pqiw", "nmzh", "jjba", "LKaO", "Iajk", "LmaA", "osLA", "spdD", "PosL", "PJsA"];
    var arrNum = arr.length;
    var sum = Math.floor(Math.random() * arrNum);
    var uCode = document.getElementById("in-code");
    uCode.value = arr[sum];
}

//验证码正确验证
function changeVerification() {
    var uFont = document.getElementsByClassName("not-font")[3];
    var uCode = document.getElementById("in-code");
    var uVerification = document.getElementById("verification");
    var codeTextV = uVerification.value.toLowerCase(); //转为小写
    var codeTextB = uCode.value.toLowerCase();
    if (codeTextV !== uCode.value) {
        uFont.innerHTML = "验证码错误";
        uVerification.style.borderColor = "red";
        return false;
    }
    uFont.innerHTML = "√";
    uVerification.style.borderColor = "#BABABA";
    return true;
}


//切换表单
function checkRadioT() {
    var uRadio = document.getElementsByName("up");
    var a = document.getElementsByTagName("form");
    if (uRadio[0].checked == true) {
        a[0].style.display = "block";
        a[1].style.display = "none";
    } else if (uRadio[1].checked == true) {
        a[0].style.display = "none";
        a[1].style.display = "block";
    }
}

//表单2提交验证
function checkForm2() {
    if (changeName2() && changePas2() && changeVerification2()) {
        return true;
    } else {
        return false;
    }
}

//验证用户名
function changeName2() {
    var uFont = document.getElementsByClassName("not-font2")[0];
    var uName = document.getElementById("in-name2");
    var nameBox = document.getElementById("form-name2");
    var uNameV = uName.value;
    var szReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/; //邮箱正则
    if (uNameV == "") {
        uFont.innerHTML = "邮箱不能为空";
        nameBox.style.borderColor = "red";
        return false;
    } else if (!szReg.test(uNameV)) {
        uFont.innerHTML = "请输入正确的邮箱地址";
        nameBox.style.borderColor = "red";
        return false;
    }
    uFont.innerHTML = "√";
    nameBox.style.borderColor = "#BABABA";
    return true;
}

//验证密码
function changePas2() {
    var uFont = document.getElementsByClassName("not-font2")[1];
    var pasBox = document.getElementById("form-pas2");
    var uPhone = document.getElementById("in-pas2");
    var uPhoneV = uPhone.value;
    var zz = /^[0-9a-zA-Z]*$/g; //只能为数字和字母
    if (uPhoneV == "") {
        uFont.innerHTML = "密码不能为空";
        pasBox.style.borderColor = "red";
        return false;
    } else if (uPhoneV.length < 6 || uPhoneV.length > 16) {
        uFont.innerHTML = "长度必须为6~16位";
        pasBox.style.borderColor = "red";
        return false;
    } else if (!zz.test(uPhoneV)) {
        uFont.innerHTML = "密码必须为数字+字母";
        pasBox.style.borderColor = "red";
        return false;
    }
    uFont.innerHTML = "√";
    pasBox.style.borderColor = "#BABABA";
    return true;
}

//获取验证码
function clickCode2() {
    var arr = ["wfls", "lkjs", "iuqw", "pjsh", "uuhs", "lqkw", "adfs", "qwes", "sfxz", "qwet", "ojks", "yujs", "nmnz", "shnz", "pqiw", "nmzh", "jjba", "LKaO", "Iajk", "LmaA", "osLA", "spdD", "PosL", "PJsA"];
    var arrNum = arr.length;
    var sum = Math.floor(Math.random() * arrNum);
    var uCode = document.getElementById("in-code2");
    uCode.value = arr[sum];
}

//验证码正确验证
function changeVerification2() {
    var uFont = document.getElementsByClassName("not-font2")[2];
    var uCode = document.getElementById("in-code2");
    var uVerification = document.getElementById("verification2");
    var codeTextV = uVerification.value.toLowerCase(); //转为小写
    var codeTextB = uCode.value.toLowerCase();
    if (codeTextV !== codeTextB) {
        uFont.innerHTML = "验证码错误";
        uVerification.style.borderColor = "red";
        return false;
    }
    uFont.innerHTML = "√";
    uVerification.style.borderColor = "#BABABA";
    return true;
}