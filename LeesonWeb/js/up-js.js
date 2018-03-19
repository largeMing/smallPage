/**
 * Created by Administrator on 2017/12/6/006.
 */

//登陆表单验证
function checkForm(){
    if (changeName() && changePas() && changeCode()) {
        return true;
    } else {
        return false;
    }
}

//登陆用户名验证
function changeName(){
    var nameBox = document.getElementsByClassName("form-name")[0];
    var myName = document.getElementById("up-name"); //获取用户名节点
    var myNameV = myName.value;
    var myFont = document.getElementsByClassName("accept-font")[0];//获取提示框节点
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/; //手机号码正则
    var szReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/; //邮箱正则
    var zz = /^[0-9a-zA-Z]*$/g; //只能为数字和字母
    if (myNameV == ""){
        myFont.innerHTML = "用户名不能为空";
        nameBox.style.borderColor = "red";
        return false;
    } else if (myNameV.length < 6 || myNameV.length > 20) {
        myFont.innerHTML = "请输入长度为6~20位的账号";
        nameBox.style.borderColor = "red";
        return false;
    } else if (!myreg.test(myNameV) && !szReg.test(myNameV) && !zz.test(myNameV)){
        myFont.innerHTML = "请输入正确的邮箱或者手机号码";
        nameBox.style.borderColor = "red";
        return false;
    }
    myFont.innerHTML = "√";
    nameBox.style.borderColor = "#BABABA";
    return true;
}

//登陆密码验证
function changePas(){
    var pasBox = document.getElementsByClassName("form-pas")[0];
    var myPas = document.getElementById("up-pas"); //获取密码节点
    var myFont = document.getElementsByClassName("accept-font")[1];//获取提示框节点
    var zz = /^[0-9a-zA-Z]*$/g; //只能为数字和字母
    var myPasV = myPas.value;
    //密码非空验证
    if (myPasV == ""){
        myFont.innerHTML = "密码不能为空";
        pasBox.style.borderColor = "red";
        return false;
    } else if (myPasV.length < 6 || myPasV.length > 16){
        myFont.innerHTML = "请输入长度为6~16位的密码";
        pasBox.style.borderColor = "red";
        return false;
    } else if (!zz.test(myPasV)){
        myFont.innerHTML = "密码只能为数字+字母";
        pasBox.style.borderColor = "red";
        return false;
    }
    myFont.innerHTML = "√";
    pasBox.style.borderColor = "#BABABA";
    return true;
}

//获取验证码
function clickCode(){
    var arr = ["wfls","lkjs","iuqw","pjsh","uuhs","lqkw","adfs","qwes","sfxz","qwet","ojks","yujs","nmnz","shnz","pqiw","nmzh","jjba"];
    var arrNum = arr.length;
    var myCode = document.getElementById("up-code");
    var sum = Math.floor(Math.random()*arrNum);
    myCode.value = arr[sum];
}

//验证验证码是否正确
function changeCode(){
    var myFont = document.getElementsByClassName("accept-font")[2];//获取提示框节点
    var codeText = document.getElementById("verification");
    var mycode = document.getElementById("up-code").value;
    var codeTextV = codeText.value.toLowerCase();//转为小写
    if (codeText.value == ""){
        myFont.innerHTML = "验证码不能为空";
        codeText.style.borderColor = "red";
        return false;
    }else if (codeTextV !== mycode){
        myFont.innerHTML = "验证码不正确";
        codeText.style.borderColor = "red";
        return false;
    }
    myFont.innerHTML = "√";
    codeText.style.borderColor = "#BABABA";
    return true;
}
