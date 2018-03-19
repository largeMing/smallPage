/**
 * Created by Administrator on 2017/12/3/003.
 */
function disptime(){
    var today = new Date();
    var year = today.getFullYear();//获取年份
    var month = today.getMonth();//获取月份
    var goodMonth = month + 1;
    var week = today.getDay();//获取星期几  0-6
    var getWeek = "";
    switch(week){
        case 0:
            getWeek = "星期日";
            break;
        case 1:
            getWeek = "星期一";
            break;
        case 2:
            getWeek = "星期二";
            break;
        case 3:
            getWeek = "星期三";
            break;
        case 4:
            getWeek = "星期四";
            break;
        case 5:
            getWeek = "星期五";
            break;
        case 6:
            getWeek = "星期六";
            break;
    }
    var day = today.getDate();//获取天数
    var hh = today.getHours();//获取小时数
    var font = "AM";
    if (hh > 12){
        hh -= 12;
        font = "PM";
    }
    var mm = today.getMinutes();//获取分钟数
    var ss = today.getSeconds();//获取秒数
    document.getElementById("block").innerHTML = '今天是' + year + '年\t' + goodMonth +'月' + day + '日\t' + hh + "\t" + font + '时\t' + mm + '分\t' + ss + '秒\t' + getWeek;
}
setInterval("disptime()",300);