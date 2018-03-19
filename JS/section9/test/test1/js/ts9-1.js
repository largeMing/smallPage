/**
 * Created by Administrator on 2018/1/9/009.
 */

$(document).ready(function () {
    $("#myform").submit(function () {
        var eml = $("#myform :text:first").val(); //获取电子邮箱文本框的内容
        if (eml == ""){
            alert("电子邮箱不能为空");
            return false;
        } else if (eml.indexOf("@") == -1){
            alert("Email格式不正确\n必须包含@");
            return false;
        } else if (eml.indexOf(".") == -1){
            alert("Email格式不正确\n必须包含.");
            return false;
        }
        return true;
    });
});