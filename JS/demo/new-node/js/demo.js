/**
 * Created by Administrator on 2017/12/4/004.
 */

function book(){
    var arr = document.getElementsByName("bookCheck");
    var myDiv = document.getElementsByTagName("div")[0];//获取div
    var image = document.createElement("img");//新建一个img节点
    if (arr[0].checked){
        image.setAttribute("src","img/spring.jpg");
        image.setAttribute("alt","我是图片一");
        myDiv.appendChild(image);
    }else if (arr[1].checked){
        image.setAttribute("src","img/summer.jpg");
        image.setAttribute("alt","我是图片二");
        image.setAttribute("onclick","copyNode()");
        myDiv.appendChild(image);
    }
}
function copyNode(){
    var myDiv = document.getElementsByTagName("div")[0];//获取div
    var clone = myDiv.lastElementChild.cloneNode(false);
    myDiv.insertBefore(clone,myDiv.firstChild)
}