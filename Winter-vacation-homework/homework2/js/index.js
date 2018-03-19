$(document).ready(function () {
    $(".m-c-first-l-img li:first").siblings().hide();
    //轮播
    var curIndex = 0;//定义一个全局变量，也就是图片的索引值
    var imgLen = $(".m-c-first-l-img li").length;//获取图片的张数
    var autoChange = setInterval(function () {
        if (curIndex < imgLen - 1) {
            curIndex++;
        }
        else {
            curIndex = 0;
        }
        changeTo(curIndex);
    }, 2000);
    $(".m-c-first-l-img").hover(function () {
        clearInterval(autoChange);
    }, function () {
        autoChangeAgain();
    });
    $(".m-c-first-l-num li").each(function (item) {
        $(this).click(function () {
            clearInterval(autoChange);
            changeTo(item);
            curIndex = item;
        });
    });
    $(".leftA").click(function () {
        curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);
        changeTo(curIndex);
    });
    $(".rightA").click(function () {
        curIndex = (curIndex < imgLen - 1) ? (++curIndex) : 0;
        changeTo(curIndex);
    });
    function autoChangeAgain() {
        autoChange = setInterval(function () {
            if (curIndex < imgLen - 1) {
                curIndex++;
            }
            else {
                curIndex = 0;
            }
            changeTo(curIndex);
        }, 3000);
    };
    function changeTo(num) {
        $(".m-c-first-l-img").find("li").css("display", "none").eq(num).css("display", "block");
        $(".m-c-first-l-num").find("li").eq(num).addClass("opt");
        $(".m-c-first-l-num").find("li").eq(num).siblings().removeClass("opt");
    };
});