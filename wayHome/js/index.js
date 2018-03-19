/**
 * Created by Administrator on 2018/1/5/005.
 */

$(function () {
    $(".fixed-l").click(function () {
        $(this).animate({left: "-125px"}, 500);
        $(".fixed-l-2").animate({left: "0"}, 2000);
    });
    $(".close").click(function () {
        $(".fixed-l").animate({left: "0"}, 2500);
        $(".fixed-l-2").animate({left: "-2000px"}, 1000);
    });

    $(".img-box-li1").hide(); //将所有图片隐藏
    $(".img-box-ul li:first").show(); //将第一张图片显示
    var curIndex = 0;//定义一个全局变量，也就是图片的索引值
    var imgLen = $(".img-box-ul li").length;//获取图片的张数
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
    $(".img-box").hover(function () {
        clearInterval(autoChange);
    }, function () {
        autoChangeAgain();
    });
    /*3.给左边箭头添加鼠标点击事件，当索引值>0的时候，就让它自减，否则也就是已经到第一张图片的时候让索引值为图片长度减1，也就是回到最后一张图片，再将索引值传给changeTo函数*/
    $(".img-box-l-arr").click(function () {
        curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);
        changeTo(curIndex);
    });
    /*4.给右边箭头绑定鼠标点击事件*/
    $(".img-box-r-arr").click(function () {
        curIndex = (curIndex < imgLen - 1) ? (++curIndex) : 0;
        changeTo(curIndex);
    });
    /*5.定义一个重新自动播放函数*/
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
    /*6.定义一个切换图片的函数*/
    function changeTo(num) {
        $(".img-box-ul").find("li").css("display", "none").eq(num).css("display", "block");
    };

    //更换图片
    $(".comment-s-img img").click(function () {
        var nowbigImg = $(this).parent().parent().parent().prev().children("img");//获取到当前点击的小图片上面的大图片
        var bigImg = nowbigImg.attr("src");// 获取大图片的src属性
        var smallImg = $(this).attr("src");// 获取小图片的src属性
        $(this).attr({src: bigImg, width: "56", height: "34"});// 将小图片的src属性替换成大图片的src属性
        nowbigImg.attr({src: smallImg, width: "296", height: "185"});// 将小图片的src属性替换成大图片的src属性
    });
});