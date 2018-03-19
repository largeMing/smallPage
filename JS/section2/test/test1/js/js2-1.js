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
    var b = document.getElementById("mytr1");
    if (a == true) {
        alert("移入收藏成功");
        b.style.display = "none";
    }
}
//第二本书
function checkCollect2() {
    var a = confirm("移入收藏后,将不在购物车显示,是否继续操作?");
    var b = document.getElementById("mytr2");
    if (a == true) {
        alert("移入收藏成功");
        b.style.display = "none";
    }
}
//删除第一本书
function checkDelet() {
    var a = confirm("您确定要删除商品嘛?");
    var b = document.getElementById("mytr1");
    if (a == true) {
        alert("删除成功");
        b.parentNode.removeChild(b);
    }
}
//删除第二本书
function checkDelet2() {
    var a = confirm("您确定要删除商品嘛?");
    var b = document.getElementById("mytr2");
    if (a == true) {
        alert("删除成功");
        b.style.display = "none";
    }
}

//结算
function checkOut() {
    var a = document.getElementsByClassName("number");
    var c = 0;//商品数量
    var d = document.getElementsByClassName("td1");//商品名称
    var e = document.getElementsByClassName("money");
    var f = 0;//商品金额
    for (var i = 0; i < a.length; i++) {
        c += parseInt(a[i].value);
    }
    for (var j = 0; j < e.length; j++) {
        f += parseFloat(e[j].innerText);
    }
    var g = confirm("您本次购买的商品信息如下\n\n" + "商品名称：" + d[0].innerText + "，" + d[1].innerText + "；" + "\n商品数量：" + c + "件；" + "\n商品总计：" + f.toFixed(2) + "元；\n" + "\n请确认以上信息是否有误！！！");
    document.getElementById("sum").innerHTML = f.toFixed(2);
    if (g == true) {
        alert("您的订单已经提交");
    }
    var myTr1 = document.getElementById("mytr1");//获取第一个tr
    var tr1HTML1 = myTr1.firstElementChild.innerHTML;//获取第一本书的名称
    var tr1HTML4 = myTr1.lastElementChild.previousElementSibling.lastElementChild.innerHTML;//第一本书的金额
    var myTr2 = document.getElementById("mytr2");//获取第二个tr
    var tr2HTML1 = myTr2.firstElementChild.innerHTML;//获取第二本书的名称
    var tr2HTML4 = myTr2.lastElementChild.previousElementSibling.lastElementChild.innerHTML;//第二本书的金额
    var obj = document.getElementById("mytable");//获取table
    var sumMoeny = obj.lastElementChild.lastElementChild.lastElementChild.innerHTML;//获取到总金额
    document.getElementById("result").innerHTML = "您本次购买的商品信息如下<br/>" + tr1HTML1 + "：" + tr1HTML4 + "元<br/>" + tr2HTML1 + "：" + tr2HTML4 + "元<br/>" + sumMoeny;
}


var pls = document.getElementsByClassName("number");//获取数量的数组
var onePrice = document.getElementsByClassName("unit-price");//获取单价
//第一个减号点击
function subtract() {
    var subInt = parseInt(pls[0].value) - 1;
    document.getElementById("num1").value = subInt;
    var onePrice1 = parseFloat(onePrice[0].innerHTML);//第一个单价
    var sumMoney = onePrice1 * subInt;
    document.getElementById("money").innerHTML = sumMoney.toFixed(2);
    if (subInt < 1) {
        alert("别减了,再减就没有了!");
        document.getElementById("num1").value = 1;
        document.getElementById("money").innerHTML = onePrice1.toFixed(2);
    }
}
//第二个减号点击
function subtract2() {
    var subInt2 = parseInt(pls[1].value) - 1;
    document.getElementById("num2").value = subInt2;
    var onePrice2 = parseFloat(onePrice[1].innerHTML);//第二个单价
    var sumMoney = onePrice2 * subInt2;
    document.getElementById("money2").innerHTML = sumMoney.toFixed(2);
    if (subInt2 < 1) {
        alert("别减了,再减就没有了!");
        document.getElementById("num2").value = 1;
        document.getElementById("money2").innerHTML = onePrice2.toFixed(2);
    }
}

//第一个加号点击
function plus() {
    var onePrice1 = parseFloat(onePrice[0].innerHTML);//第一个单价
    var plusInt = parseInt(pls[0].value) + 1;
    document.getElementById("num1").value = plusInt;
    var sumMoney = onePrice1 * plusInt;
    document.getElementById("money").innerHTML = sumMoney.toFixed(2);
}

//第二个加号点击
function plus2() {
    var onePrice2 = parseFloat(onePrice[1].innerHTML);//第二个单价
    var plusInt = parseInt(pls[1].value) + 1;
    document.getElementById("num2").value = plusInt;
    var sumMoney = onePrice2 * plusInt;
    document.getElementById("money2").innerHTML = sumMoney.toFixed(2);
}
