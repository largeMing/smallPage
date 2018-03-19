/**
 * Created by Administrator on 2017/12/13/013.
 */

function People() {

}
People.prototype.name = "郎晓明";
People.prototype.age = "38";
People.prototype.work = "中国内地男演员,歌手";
People.prototype.address = "中国北京海淀区";
People.prototype.showPeople = function () {
    var str = "<br/><br/>姓名：" + this.name + "<br/><br/>年龄：" + this.age + "<br/><br/>工作：" + this.work + "<br/><br/>住址：" + this.address;
    document.write(str);
}
var people1 = new People();
people1.showPeople();

var people2 = new People();
people2.name = "周实梁";

alert(people1.name);
alert(people2.name);