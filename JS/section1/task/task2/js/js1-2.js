/**
 * Created by Administrator on 2017/12/2/002.
 */

function check(){
    var i = document.getElementById("email").value;
    var j = i.indexOf("@");
    var k = i.substring(0,j);
    if (i == ""){
        alert('邮箱不能为空');
    } else if (i.indexOf("@") == -1 || i.indexOf(".") == -1){
        alert("邮箱中必须要有@和.");
    }else {
        alert("您的邮箱名称为:" + k);
    }

}