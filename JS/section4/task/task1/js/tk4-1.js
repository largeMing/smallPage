/**
 * Created by Administrator on 2017/12/20/020.
 */
var student = new Object();
student.name = "高乐乐";
student.age = "15";
student.referral = "我叫高乐乐,我是一个初中三年级的学生,我非常喜欢音乐和打篮球";
student.show = function () {
    var str = '<br/>姓名：' + this.name + '<br/><br/>年龄：' + this.age + '<br/><br/>自我介绍：' + this.referral;
    return str;
}
document.getElementById("myDiv").innerHTML = student.show();
