/**
 * Created by Administrator on 2017/12/20/020.
 */
function Person() {
    this.name = "张三";
    this.chinese = "98";
    this.math = "80";
}

Person.prototype.getName = function () {
    return this.name;
}
Person.prototype.getChinese = function () {
    return this.chinese;
}
Person.prototype.getMath = function () {
    return this.math;
}
function Student() {
    this.age = "25";
}
Student.prototype = new Person();
Student.prototype.getAge = function () {
    return this.age;
}
var student1 = new Student();
document.write("<br/>姓名：" + student1.getName() + "<br/><br/>语文：" + student1.getChinese() + "<br/><br/>数学：" + student1.getMath() + "<br/><br/>年龄：" + student1.getAge());