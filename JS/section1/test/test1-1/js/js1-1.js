/**
 * Created by Administrator on 2017/12/1/001.
 */
function check() {
    document.write("在以下字符中：" + "<br/>");
    var Arr = ["Akjkljlk", "jlkasd", "ASJDaKJ", "54654dwe", "qwejkf", "jkwe", "aiojAjl", "Ajkjlza"];
    var arrOfA = 0, arrOfa = 0, arrOfaA = 0, defOf = 0; //初始化含有A的个数和含有a的个数和其他字符个数
    // for (var i in Arr) { //输出数组
    for (var i = 0; i < Arr.length; i++) {
        document.write("<br/>" + Arr[i] + "<br/>");//将数组打印出来
        var aa = Arr[i].indexOf("a");//判断是否有a值
        var AA = Arr[i].indexOf("A");//判断是否有A值
        if(aa !== -1){
            arrOfa++;
        }
        if ( AA !== -1){
            arrOfA++;
        }
        if (aa !== -1 || AA !== -1) {
            arrOfaA++;
        }
    }
    document.write("共有" + i + "个字符,其中包含a或A的有" + arrOfaA + "个");
    document.write(",含有A的有" + arrOfA + "个,含有a的有" + arrOfa + "个");
}

