/**
 * Created by Administrator on 2017/12/4/004.
 */

function book(){
    var arr = document.getElementsByName("bookCheck");
    var image = document.getElementById("img");
    if (arr[0].checked){
        image.setAttribute("src","img/spring.jpg");
        image.setAttribute("alt","我是图片一");
        image.nextElementSibling.innerHTML = "我是图片一";
    }else if (arr[1].checked){
        image.setAttribute("src","img/summer.jpg");
        image.setAttribute("alt","我是图片二");
        image.nextElementSibling.innerHTML = "我是图片二";
    }
}

function checkImg(){
    var myAlt = document.getElementById("img").getAttribute("alt");
    alert(myAlt);
}