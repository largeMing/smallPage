/**
 * Created by Administrator on 2017/12/1/001.
 */

var sub = parseInt(prompt("请输入科目数量:"));
if (isNaN(sub)||sub == 0){
    document.getElementById("button").style.display="none";
}
var nub = 0;
document.write("<div class='box'>");
for (var a = 0;a < sub;a++){
    document.write("<div>");
    nub++;
    document.write("你的第" + nub + "门成绩:");
    document.write("<input type='text' name='grade'>");
    document.write("</div>");
}
document.write("<input type='button' value='点击获取总成绩' id='button' onclick='checkSum();'>");
document.write("</div>");
function checkSum(){
    var sum = document.getElementsByName("grade");
    var sumNumber = sum.length;
    var numb = 0;
    var ssum = 0;
    for (var i = 0;i < sumNumber;i++){
        ssum += parseInt(sum[i].value);
        numb++;
        switch (true){
            case sum[i].value == '':
                alert("你的第" + numb + "门成绩不能为空");
                break;
            case sum[i].value < 0:
                alert("你的第" + numb + "门成绩不能为负数");
                break;
            case sum[i].value > 120:
                alert("你的第" + numb + "门成绩不能大于120分");
                break;
        }
    }
    if (isNaN(ssum)){
        alert("输入有误");
    }else {
        alert("总成绩为" + ssum);
    }
}

