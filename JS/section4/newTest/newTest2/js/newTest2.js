/**
 * Created by Administrator on 2018/1/15/015.
 */

function person(name,age,job,address) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.address = address;
    this.show = function () {
        var str = "姓名：" + this.name + "<br>" + "年龄：" + this.age + "<br>" + "工作：" + this.job + "<br>" + "住址：" + this.address + "<br>";
        document.getElementById("intro").innerHTML = str;
    };
}

var person1 = new person("郎晓明","38","中国内地男演员、歌手","中国北京海淀区");
person1.show();


