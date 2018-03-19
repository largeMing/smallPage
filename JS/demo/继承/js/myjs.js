/**
 * Created by Administrator on 2017/12/20/020.
 */
function Animal(foot, name) {
    this.foot = 4;
    this.name = "动物";
}
Animal.prototype.showFoot = function () {
    return this.foot;
}
function Dog(foot, name) {
    Animal.call(this, foot, name);//继承了Animal,和Animal的参数
}
Dog.prototype = new Animal();
var dog1 = new Dog(3, "大黄");
alert(dog1.showFoot());
alert( dog1.name);
