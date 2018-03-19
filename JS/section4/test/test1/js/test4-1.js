/**
 * Created by Administrator on 2017/12/5/005.
 */

var myObj = {
    name:"郎晓明",
    age:"38",
    job:"中国内地男演员,歌手",
    address:"中国北京海淀区",
    showName:function(){
        var str = "姓名：" + this.name + "<br/><br/>年龄：" + this.age + "<br/><br/>工作：" + this.job + "<br/><br/>住址：" + this.address;
        document.write(str);
    }
}
myObj.showName();


