var num = 60;
function setTime(obj) {
    if (num === 0) {
        obj.removeAttribute("disabled");
        obj.value = "重新发送验证码";
        num = 60;
        return;
    } else {
        obj.setAttribute("disabled", true);
        obj.value = "重新发送(" + num + ")";
        num--;
    }
    setTimeout(function () {
            setTime(obj)
        }
        , 1000)
}