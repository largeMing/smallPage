/**
 * Created by Administrator on 2018/1/16/016.
 */


$(document).ready(function () {
    /*弹出广告窗口*/
    window.open("open.html", "", "width=500,height=327,scrollbars=no,location=no,left=400,top=200");
    /*随滚动条滚动的广告*/
    var $rightScroll = $("#right");
    var adverTop = parseInt($rightScroll.css("top"));//获取元素距顶部的距离
    var adverLeft = parseInt($rightScroll.css("left"));//获取元素距左边的距离
    $(window).scroll(function () {
        var scrollTop = parseInt($(window).scrollTop());//获取滚动条滚下去的距离
        var scrollLeft = parseInt($(window).scrollLeft());//获取滚动条滚向左的距离
        $rightScroll.offset({top: scrollTop + adverTop});
        $rightScroll.offset({left: adverLeft + scrollLeft});
    })

    /*关闭浮动广告*/
    $("#dd_close").click(function () {
        $rightScroll.hide();
    })

    /*书讯快递循环滚动*/
    var doscroll = setInterval(function () {
        var $parent = $("#express");
        var $first = $parent.find("li:first");
        var height = $first.height();
        $first.animate({marginTop: -height + 'px'}, 500,
            function () {
                $first.css("marginTop", 0).appendTo($parent);
            });
    }, 500);

    //定义一个重新自动滚动
    function doscrollAlign() {
        doscroll = setInterval(function () {
            var $parent = $("#express");
            var $first = $parent.find("li:first");
            var height = $first.height();
            $first.animate({
                marginTop: -height + 'px'
            }, 500, function () {
                $first.css("marginTop", 0).appendTo($parent);
            });
        }, 500);
    }

    /*鼠标放在书讯快递上,停止滚动,移开就继续滚动*/
    $("#express ").hover(function () {
        clearInterval(doscroll);
    }, function () {
        doscrollAlign();
    });

    /*图书畅销榜和图书新书榜实现Tab切换*/
    $(".tab ol li:first").mousemove(function () {
        $(".tab ul:first").show();
        $(".tab ul:last").hide();
        $(this).css({background: "#fff", borderRight: "none", borderBottom: "none"});
        $(".tab ol li:last").css({background: "#efefef", borderLeft: "1px solid #ccc", borderBottom: "1px solid #ccc"});
    });
    $(".tab ol li:last").mousemove(function () {
        $(".tab ul:first").hide();
        $(".tab ul:last").show();
        $(this).css({background: "#fff", borderLeft: "none", borderBottom: "none"});
        $(".tab ol li:first").css({
            background: "#efefef",
            borderRight: "1px solid #ccc",
            borderBottom: "1px solid #ccc"
        });
    });

    /*鼠标移至图书标题显示图片和图书信息*/
    $(".tab ul li").mousemove(function () {
        $(this).find("p").hide();
        $(this).find("dl").show();
        $(this).siblings().find("p").show();
        $(this).siblings().find("dl").hide();
    });


    /*图片轮播效果*/
    var curIndex = 0;//定义一个全局变量，也就是图片的索引值
    var imgLen = $("#scroll_img li").length;//获取图片的张数
    /*1.用定时器做一个自动播放函数，当图片索引值小于图片长度-1的时候，就让索引值自增，当它等于图片长度，也就是到最后一张图片的时候，让它为0，从第一张图片重新开始*/
    var autoChange = setInterval(function () {
        if (curIndex < imgLen - 1) {
            curIndex++;
        }
        else {
            curIndex = 0;
        }
        changeTo(curIndex);
    }, 2500);
    /*2.给按钮绑定事件，当鼠标悬浮到某个li上面时清除定时器，移开又自动播放*/
    $("#scroll_number").find("li").each(function (item) {
        $(this).hover(function () {
            clearInterval(autoChange);
            changeTo(item);
            curIndex = item;
        }, function () {
            autoChangeAgain();
        });
    });

    /*3.定义一个重新自动播放函数*/
    function autoChangeAgain() {
        autoChange = setInterval(function () {
            if (curIndex < imgLen - 1) {
                curIndex++;
            }
            else {
                curIndex = 0;
            }
            changeTo(curIndex);
        }, 2500);
    };

    /*5.定义一个切换图片的函数*/
    function changeTo(num) {
        $("#scroll_img").find("li").fadeOut(600).eq(num).fadeIn(600);
        $("#scroll_number").find("li").eq(num).css("background", "#f30");
        $("#scroll_number").find("li").eq(num).siblings().css("background", "#a9a9a9");
    };
});