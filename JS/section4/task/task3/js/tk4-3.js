/**
 * Created by Administrator on 2017/12/21/021.
 */
function Animal(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}
function Poultry(name, age, color, leg) {
    Animal.call(this,name,age,color); //继承属性
    this.leg = leg;
    var uBody = document.getElementsByTagName("body")[0];
    var uP = document.createElement("p");
    uBody.appendChild(uP);
    this.info = uP.innerHTML =
        "我是一个" + this.color +
        "的" + this.name +
        ",今年已经" + this.age +
        "岁了,我有" + this.leg +
        "条腿";
}
Poultry.prototype = new Animal(); //继承方法
Poultry.prototype.getInfo = function () {
    return this.info;
};
var info1 = new Poultry("小狗狗", "1", "灰色", "4");
var info2 = new Poultry("茶杯猫", "2", "白色", "4");
var info3 = new Poultry("母鸡", "1", "红色", "2");