/**
 * Created by Administrator on 2017/12/4/004.
 */

function myImg(uImg){
    var i = document.getElementById("myImg");
    i.setAttribute("src","img/tm" + uImg + ".jpg");
}

function checkImg(num){
    myImg(num);
}
