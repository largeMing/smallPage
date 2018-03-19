/**
 * Created by Administrator on 2017/12/4/004.
 */

//点击'我要发帖'显示发布层
function pushPost() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("title").value = "";
    document.getElementsByTagName("option")[0].selected = true;
    document.getElementsByTagName("textarea")[0].value = "";
}

//点击'发布'
function myPush() {
    var today = new Date();//获取当前时间
    var year = today.getFullYear();//年份
    var month = today.getMonth() + 1;//月份
    var day = today.getDate();//天数
    var hh = today.getHours();//小时
    var dd = today.getMinutes();//分钟
    var ss = today.getSeconds();//秒
    var imgArr = ["head-img", "head-img1", "head-img2"];
    var imgRandom = Math.ceil(Math.random() * (imgArr.length)) - 1;
    var uTitle = document.getElementById("title").value;//获取输入的标题
    var uOtn = document.getElementsByTagName("option");//下拉框
    for (var i = 0; i < uOtn.length; i++) {
        if (uOtn[i].selected == true) {
            var Ovalue = uOtn[i].value; //获取到选中时候的下拉框的值
        }
    }
    var textTar = document.getElementsByTagName("textarea")[0].value;//获取文本域内输入的值
    // var uLi = document.createElement("li");//创建一个li节点
    var myUl = document.getElementsByTagName("ul")[0];
    var newLi = myUl.lastElementChild.cloneNode(true);
    var tweLi = document.getElementsByTagName("ul")[0].firstElementChild.nextElementSibling;
    if (uTitle.length == 0) {
        alert("标题不能为空");
    } else if (Ovalue == "请选择板块") {
        alert("请选择一个板块");
    } else if (textTar == "") {
        alert("请输入内容");
    } else {
        newLi.firstElementChild.setAttribute("class", imgArr[imgRandom]);//随机头像
        newLi.lastElementChild.firstElementChild.innerHTML = uTitle; //发帖的标题
        newLi.lastElementChild.lastElementChild.firstElementChild.innerHTML = "板块：" + Ovalue; //发帖的板块
        newLi.lastElementChild.lastElementChild.lastElementChild.innerHTML = "发表时间：" + year + "-" + month + "-" + day + "&nbsp;" + hh + ":" + dd + ":" + ss;
        myUl.insertBefore(newLi, tweLi);
        document.getElementById("popup").style.display = "none";
    }

}
