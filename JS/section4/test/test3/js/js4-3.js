/**
 * Created by Administrator on 2017/12/19/019.
 */
function Person() {
    this.nation = "汉族";
    this.skinColor = "黄色";
}
Person.prototype.getNation = function () {
    return this.nation;
}
Person.prototype.getSkinColor = function () {
    return this.skinColor;
}
function Woman() {
    this.sex = "女";
}
Woman.prototype = new Person();//继承Person
Woman.prototype.getSex = function () {
    return this.sex;
}
var woman1 = new Woman();
document.write("<br/>民族：" + woman1.getNation() + "<br/><br/>肤色：" + woman1.getSkinColor() + "<br/><br/>性别：" + woman1.getSex());
