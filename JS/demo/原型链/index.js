/**
 * Created by Administrator on 2017/12/19/019.
 */
function Humans() {
    this.foot = 2;
}
Humans.prototype.getFoot = function () {
    return this.foot;
}
function Man() {
    this.head = 1;
}
Man.prototype = new Humans();               //继承了Humans
Man.prototype.getHead = function () {
    return this.head;
}
var man1 = new Man();
alert(man1.getFoot());
alert(man1 instanceof Object);
alert(man1 instanceof Man);