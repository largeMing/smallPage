/**
 * Created by Administrator on 2017/12/2/002.
 */

//关闭窗口
function checkClose() {
    var a = confirm("您确认要关闭当前页面吗?");
    if (a == true) {
        window.close();
    }
}

//移入收藏  第一本书
function checkCollect() {
    var a = confirm("移入收藏后,将不在购物车显示,是否继续操作?");
    var b = document.getElementsByClassName("mytr")[0];
    if (a == true) {
        alert("移入收藏成功");
        b.style.display = "none";
    }
}

//移入收藏 第二本书
function checkCollect2() {
    var a = confirm("移入收藏后,将不在购物车显示,是否继续操作?");
    var b = document.getElementsByClassName("mytr")[1];
    if (a == true) {
        alert("移入收藏成功");
        b.style.display = "none";
    }
}

//删除第一本书
function checkDelet() {
    var a = confirm("您确定要删除商品嘛?");
    var b = document.getElementsByClassName("mytr")[0];
    if (a == true) {
        alert("删除成功");
        b.parentNode.removeChild(b);
        ssum.innerHTML = countprice.toFixed(2);
    }
}

//删除第二本书
function checkDelet2() {
    var a = confirm("您确定要删除商品嘛?");
    var b = document.getElementsByClassName("mytr")[1];
    if (a == true) {
        alert("删除成功");
        b.parentNode.removeChild(b);
        ssum.innerHTML = countprice.toFixed(2);
    }
}


var uTable = document.getElementsByTagName("table")[0]; // 获取table标签
var aTr = uTable.getElementsByClassName("mytr"); // 获取table标签下的所有 tr
var ssum = document.getElementById("sum"); //获取总金额标签
var oPrice = document.getElementsByClassName("unit-price"); // 获取单价

var ooPrice1 = parseFloat(oPrice[0].innerHTML);
var ooPrice2 = parseFloat(oPrice[1].innerHTML);
var countprice = ooPrice1 + ooPrice2; // 初始化总金额
ssum.innerHTML = countprice.toFixed(2);


for (var i = 0; i < aTr.length; i++) {
    shop(aTr[i]); // 给shop方法里面传一个参数  参数为  tr
}

function shop(obj) { // 用obj来接收 tr
    var aInp = obj.getElementsByTagName('input'); // 获取tr里面的 input标签 + -
    var aSpan = obj.getElementsByClassName("number"); // 获取tr里面的class为'number'的标签
    /*获取tr里面的class为'money'的标签  这里可以看做是初始价格 但后面替换掉的价格也是它*/
    var onePrice = obj.getElementsByClassName("money");
    var price = parseFloat(onePrice[0].innerHTML);
    var num = parseInt(aSpan[0].innerHTML); // 获取数量值
    aInp[0].onclick = function () {
        aSpan[0].innerHTML = --num; //将自减1后的值 替换掉原来的值
        if (num < 1) {
            alert("不能再减啦");
            /*将值改为1  如果不改为1 那此时的数量为0  但是总金额不会改变,因为已经将num = 1 返回出去了*/
            aSpan[0].innerHTML = 1;
            num = 1;
            return; //将 num = 1返回
        }
        onePrice[0].innerHTML = (num * price).toFixed(2); // 金额 = 自减1后的值 * 单价
        countprice -= price; // countprice = countprice - price; 总金额 = 总金额 - 当前价格
        ssum.innerHTML = countprice.toFixed(2); //输出总金额
    };
    aInp[1].onclick = function () {
        aSpan[0].innerHTML = ++num;//将自增1后的值 替换掉原来的值
        onePrice[0].innerHTML = (num * price).toFixed(2); // 金额 = 自增1后的值 * 单价
        countprice += price; // countprice = countprice + price;
        ssum.innerHTML = countprice.toFixed(2); //输出总金额
    }
}