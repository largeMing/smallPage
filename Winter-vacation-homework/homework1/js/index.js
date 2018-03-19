/**
 * Created by Administrator on 2018/2/7/007.
 */
$(function () {
    $(".main-hotel-logo-arr img").click(function () {
        if ($(this).index() == 0){
            $(".main-hotel-logo-img").animate({"left":"-200px"},1000)
        } else if ($(this).index() == 1){
            $(".main-hotel-logo-img").animate({"left":"0px"},1000)
        }
    });

    //轮播
    var curIndex = 0;//定义一个全局变量，也就是图片的索引值
    var imgLen = $(".header-img li").length;//获取图片的张数
    /*1.用定时器做一个自动播放函数，当图片索引值小于图片长度-1的时候，就让索引值自增，当它等于图片长度，也就是到最后一张图片的时候，让它为0，从第一张图片重新开始*/
    var autoChange = setInterval(function () {
        if (curIndex < imgLen - 1) {
            curIndex++;
        }
        else {
            curIndex = 0;
        }
        changeTo(curIndex);
    }, 2000);
    /*2.添加鼠标悬浮事件，当鼠标悬浮在图片上时，清除定时器，鼠标移开时，调用函数重新开始自动播放*/
    $(".header-img").hover(function () {
        clearInterval(autoChange);
    }, function () {
        autoChangeAgain();
    });
    /*3.给按钮绑定事件，当鼠标悬浮到某个li上面时清除定时器，移开又自动播放*/
    $(".header-num li").each(function (item) {
        $(this).click(function () {
            clearInterval(autoChange);
            changeTo(item);
            curIndex = item;
        });
    });
    /*4.给左边箭头添加鼠标点击事件，当索引值>0的时候，就让它自减，否则也就是已经到第一张图片的时候让索引值为图片长度减1，也就是回到最后一张图片，再将索引值传给changeTo函数*/
    $(".header-arr-l").click(function () {
        curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);
        changeTo(curIndex);
    });
    /*5.给右边箭头绑定鼠标点击事件*/
    $(".header-arr-r").click(function () {
        curIndex = (curIndex < imgLen - 1) ? (++curIndex) : 0;
        changeTo(curIndex);
    });
    /*6.定义一个重新自动播放函数*/
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
    /*7.定义一个切换图片的函数*/
    function changeTo(num) {
        $(".header-img").find("li").css("display", "none").eq(num).css("display", "block");
        $(".header-num").find("li").eq(num).addClass("pitch");
        $(".header-num").find("li").eq(num).siblings().removeClass("pitch");
    };

    $(".recommend-hotel-content-img>div>div").hover(function () {
        $(this).children(".recommend-hotel-content-intro").hide();
    },function () {
        $(this).children(".recommend-hotel-content-intro").show(300);
    })
});