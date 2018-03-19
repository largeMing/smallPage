/**
 * Created by Administrator on 2018/1/6/006.
 */

var myArr = ["headImg1.webp", "headImg2.webp", "headImg3.webp", "headImg4.webp", "headImg5.webp"]; //用数组保存头像
var userNum = Math.floor(Math.random() * myArr.length); //随机数
var today = new Date;//获取当前时间
var uAge = today.getFullYear();//获取年份
var moth = today.getMonth();//获取月份
var sky = today.getDate();//获取天数
var hh = today.getHours();//获取小时
var mm = today.getMinutes();//获取分钟
var myAge = uAge + "-" + (moth + 1) + "-" + sky;
var myTime = hh + ":" + mm;


$(function () {
    //点击我要发帖,编辑板块显示
    $(".myPost").click(function () {
        $(".popup").show();
        $(".title").val("");
        $("option")[0].selected = true;
        $("textarea").val("");
    });
    //点击编辑板块右上角箭头,编辑版块隐藏;
    $(".popup-close").click(function () {
        $(".popup").hide();
    });
    //点击发布,插入一个新的节点
    $(".myPost1").click(function () {
        var myTitle = $(".title").val();
        var myOption = $("option"); //获取option
        var myTextarea = $("textarea").val(); //文本域内容
        for (var i = 0; i < myOption.length; i++) {
            if (myOption[i].selected == true) {
                var Ovalue = myOption[i].value; //获取到选中时候的下拉框的值
            }
        }
        if (myTitle.length == 0) {
            alert("标题不能为空。");
        } else if (Ovalue == "请选择板块") {
            alert("请选择板块");
        } else if (myTextarea.length == 0) {
            alert("输入的内容不能为空");
        } else {
            var headImg = "<img src='img/" + myArr[userNum] + "' class='head-img'>";
            var titleNode = "<a href=''>" + myTitle + "</a>";
            var plateNode = "<span class='span-left'>板块：" + Ovalue + "</span>";
            var timeNode = "<span class='span-right'>发表时间：" + myAge + "&nbsp;" + myTime + "</span>";
            var liCont = "<div class='li-content'>"+titleNode+"<div>"+plateNode+""+timeNode+"</div></div>";
            var liNode = "<li>"+headImg+""+liCont+"</li>";
            $("ul li:eq(1)").before(liNode);
            $(".popup").hide();
        }
    });
});
