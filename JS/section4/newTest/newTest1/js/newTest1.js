/**
 * Created by Administrator on 2018/1/15/015.
 */


var person = new Object();
person.name = "郎晓明";
person.age = "38";
person.job = "中国内地男演员、歌手";
person.address = "中国北京海淀区";
person.show = function () {
    var str = "姓名：" + this.name + "<br>" + "年龄：" + this.age + "<br>" + "工作：" + this.job + "<br>" + "住址：" + this.address + "<br>";
    document.getElementById("intro").innerHTML = str;
};

person.show();
