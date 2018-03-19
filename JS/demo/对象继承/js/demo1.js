/**
 * Created by Administrator on 2017/12/19/019.
 */
function Humans() {
    this.clothing = ["trousers", "dress", "jacket"];
}
function Man() {
}
Man.prototype = new Humans();
var man1 = new Man();
man1.clothing.push("coat");
alert("man1：" + man1.clothing);
var man2 = new Man();
alert("man2：" + man2.clothing);