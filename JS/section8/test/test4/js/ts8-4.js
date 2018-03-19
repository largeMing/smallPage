/**
 * Created by Administrator on 2018/1/6/006.
 */

$(document).ready(function () {

    //左边导航栏
    $(".title").click(function () {
        $(".second").hide("fast");
        $(this).siblings("ul").toggle("fast");
    });

    //搜索框获得鼠标焦点时
    $(".help-input").focus(function () {
        var txtVal = $(this).val();
        if (txtVal == "请输入需要搜索的内容") {
            $(this).val("");
        }
    });

    //搜索框失去焦点时
    $(".help-input").blur(function () {
        var txtVal = $(this).val();
        if (txtVal == "") {
            $(this).val("请输入需要搜索的内容");
        }
    });

    //购物流程
    $("#lc_bg > div").hover(function () {
        $(this).parents("#lc_bg").removeClass('lc_bg0 lc_bg1 lc_bg2 lc_bg3 lc_bg4').addClass("lc_bg" + $(this).index());
        $(this).children().addClass("aColor");
    }, function () {
        $(this).children().removeClass("aColor");
    });

    //点击未解决
    $("input[name='IsAvail']").click(function () {
        if ($(this).val() == 0) {
            $(".wenti").show("fast");
        } else if ($(this).val() == 1) {
            $(".wenti").hide("fast");
        }
    });

    //select选中其他原因时
    $("#TrackID").change(function () {
        if ($("option")[3].selected == true){
            $("#TrackContentDiv").show("fast");
        }else {
            $("#TrackContentDiv").hide("fast");
        }
    });

});


