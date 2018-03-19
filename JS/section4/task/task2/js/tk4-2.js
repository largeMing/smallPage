/**
 * Created by Administrator on 2017/12/20/020.
 */
function Student(name, age, referral) {
    this.name = name;
    this.age = age;
    this.referral = referral;
    var myBody = document.getElementsByTagName("body")[0];
    var myP = document.createElement("p");
    myBody.appendChild(myP);
    this.StuP = myP.innerHTML =
        "<br/><br/>姓名：" +
        this.name +
        "<br/><br/>年龄：" +
        this.age +
        "<br/><br/>自我介绍：" +
        this.referral;
}
Student.prototype.getStuP = function() {
    return this.StuP;
}
;
var student1 = new Student("王小明","16","我是高中一年级的学生,身高1.8米,很帅,我喜欢学习语文和英语.");
var student2 = new Student("黄妞妞","6","我今年6岁了,非常可爱,马上就可以上小学了,就可以有好多好多的小朋友了");

student1.getStuP();
student2.getStuP();