/**
 * Created by Administrator on 2017/12/4/004.
 */

function del(){
    var myBody = document.getElementsByTagName("body")[0];
    var img1 = myBody.firstElementChild.firstElementChild;//获取第一个图片
    img1.parentNode.removeChild(img1);
}

function newImg(){
    var myBody = document.getElementsByTagName("body")[0];
    var img2 = myBody.lastElementChild.firstElementChild;//获取第一个图片
    var newNode = document.createElement("img");
    newNode.setAttribute("src","img/winter.jpg");
    newNode.setAttribute("width","200");
    img2.parentNode.replaceChild(newNode,img2);
}