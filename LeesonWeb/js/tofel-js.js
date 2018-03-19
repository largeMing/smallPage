/**
 * Created by Administrator on 2017/12/11/011.
 */
function imgSrc(imgNum) {
    var a = document.getElementById("lessonImg");
    a.setAttribute("src", "img/tofel-img" + imgNum + ".gif");
}

//托福页面  直播课...图片更换
function lesson(num) {
    imgSrc(num);
}

//鼠标移入APP
function appCheck() {
    document.getElementsByClassName("app-ul")[0].style.display = "block";
}

//鼠标移出APP
function appOut() {
    document.getElementsByClassName("app-ul")[0].style.display = "none";
}