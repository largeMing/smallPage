/**
 * Created by Administrator on 2018/1/15/015.
 */

//创建构造函数Person
function Person() {
    this.nation = "汉族";
    this.skinColor = "黄色";
    this.showNation = function () {
        return this.nation;
    }
    this.showSkinColor = function () {
        return this.skinColor;
    }
}
//创建构造函数Woman
function Woman() {
    this.sex = "女";
}
//继承Person
Woman.prototype = new Person();
Woman.prototype.getSex = function () {
    return this.sex;
}
var woman1 = new Woman();
var str = "民族:" + woman1.showNation() + "<br>肤色:" + woman1.showSkinColor() + "<br>性别:" + woman1.getSex();
document.write(str);

