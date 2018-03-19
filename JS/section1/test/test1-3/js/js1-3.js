/**
 * Created by Administrator on 2017/12/1/001.
 */
function checkEqual(){
    var num = document.getElementById("value1").value;
    var num1 = parseInt(num);
    var num3 = document.getElementById("value2").value;
    var num2 = parseInt(num3);
    var sum1 = document.getElementById("sum");
    var obj = document.getElementById("select");//定位ID
    var index = obj.selectedIndex;//选中索引
    var oValue = obj.options[index].value;//选中值
    switch(oValue){
        case "jia":
            sum1.value = num1 + num2;
            break;
        case "jian":
            sum1.value = num1 - num2;
            break;
        case "cheng":
            sum1.value = num1 * num2;
            break;
        case "chu":
            sum1.value = num1 / num2;
            break;
    }
}