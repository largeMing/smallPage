/**
 * Created by Administrator on 2018/1/4/004.
 */


var score = prompt("请输入考试科目数量");
var userScore = parseInt(score);
if (userScore == 0 || userScore < 0) {
    alert("输入不能为0,不能小于0");
} else if (isNaN(score) != false) {
    alert("输入的不是数字");
} else if (score == "") {
    alert("输入不能为空");
}
var sum = 0;
for (var i = 0; i < userScore; i++) {
    var scoreNum = prompt("请输第" + (i + 1) + "门科目成绩:");
    var uScoreNum = parseInt(scoreNum);
    if (uScoreNum < 0) {
        alert("成绩不能是负数");
        break;
    }
    sum = sum + uScoreNum;
}
alert(i + "门科总成绩为:" + sum);

