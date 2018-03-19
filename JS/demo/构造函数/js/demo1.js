/**
 * Created by Administrator on 2017/12/5/005.
 */
/*
function show() {
    var myObj = {
        name:"郎晓明",
        age:"38",
        job:"中国内地男演员,歌手",
        address:"中国北京海淀区",
        showName:function(){
            var str = "姓名：" + this.name + "<br/>年龄：" + this.age + "<br/>工作：" + this.job + "<br/>住址：" + this.address;
            document.getElementById("intro").innerHTML = str;
        }
    }
    myObj.showName();
}
*/

/*

function Flower(name,age,job,address){
    this.name = name;
    this.age = age;
    this.job = job;
    this.address = address;
    this.showName = function(){
        alert(this.age);
    }
}
var flower1 = new Flower("名字","年龄","工作","地址");
flower1.showName();
var flower2 = new Flower("蒋明","19","ceo","帝都");
 flower2.showName();
*/

function Flower(name,age,job,address){
    this.name = name;
    this.age = age;
    this.job = job;
    this.address = address;
    this.showName = showName;
}
function showName() {
    alert(this.name);
}
var flower1 = new Flower("名字","年龄","工作","地址");
flower1.showName();