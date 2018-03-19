/**
 * Created by Administrator on 2018/2/11/011.
 */
$(function () {
    $(".radio-def").click(function () {
        if ($(this).is(":checked")){
            $(this).addClass("radio-checked");
            $(this).parent().siblings().find("input").removeClass("radio-checked");
            $(this).parents("li").find(".m-c-c-def").removeClass("opt");
        }
    });
    //点击"不限"时，将右边选中的按钮 改为不选中
    $(".m-c-c-def").click(function () {
        $(this).addClass("opt");
        for (var i = 0;i < $(this).parents("li").find("input:not(.decide)").length;i++) {
            if ($(this).parents("li").find("input:not(.decide)").eq(i).is(":checked")){
                $(this).parents("li").find("input:not(.decide)").eq(i).removeClass("check-checked");
                $(this).parents("li").find("input:not(.decide)").eq(i).removeClass("radio-checked");
                $(this).parents("li").find("input:not(.decide)").eq(i).prop("checked",false)
            }
        }
    });

    $(".check-def").click(function () {
        if ($(this).is(":checked")){
            $(this).addClass("check-checked");
        } else {
            $(this).removeClass("check-checked");
        }
        $(this).parents("li").find(".m-c-c-def").removeClass("opt");
    });

    $(".hotel-result-ul>li:not(:first)").hover(function () {
        $(this).find(".btn-grade").addClass("btn-bg");
    },function () {
        $(this).find(".btn-grade").removeClass("btn-bg");
    })

});