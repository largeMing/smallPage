/**
 * Created by Administrator on 2018/1/16/016.
 */

$(document).ready(function () {
    /*加载左边浏览同级分类*/
    $.ajax({
        type: "GET",//请求类型
        url: "json/firstJson",//请求地址
        data: null,//参数
        dataType: "JSON",//返回数据类型
        success: function (ret) {//请求成功
            console.log(ret);
            //生成列表
            var htmlContent = "";
            for (var index in ret) {
                var temp = ret[index];
                htmlContent += "<li>";

                //名称
                htmlContent += "<a>";
                htmlContent += temp.name;
                htmlContent += "</a>";

                //数量
                htmlContent += "<span>";
                htmlContent += "(" + temp.num + ")";
                htmlContent += "</span>";

                htmlContent += "</li>";
            }

            //添加内容
            $("#product_catList_class ul").html(htmlContent);
            $("#product_catList_class ul a").hover(function () {
                $(this).css({"color":"red","cursor":"pointer"});
            },function () {
                $(this).css("color","#000")
            })
        },
        error: function () {//请求失败
            alert("请求失败")
        }
    });

    /*切换大图和列表模式*/
    var $listBtn = $("#product_storyList_content");
    var $bigImgBtn = $("#bigImgModel");
    $("#product_array a[name='array']").click(function () {
        $(this).addClass("click");
        $("#product_array a[name='bigImg']").removeClass("click");
        $listBtn.show();
        $bigImgBtn.hide();
    })
    $("#product_array a[name='bigImg']").click(function () {
        $(this).addClass("click");
        $("#product_array a[name='array']").removeClass("click");
        $listBtn.hide();
        $bigImgBtn.show();
    })
    /*大图模式下鼠标悬浮到图片内*/
    $(".big-img-list-out").hover(function () {
        $(this).addClass("big-img-list-over");
    }, function () {
        $(this).removeClass("big-img-list-over");
    })
});