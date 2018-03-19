/**
 * Created by Administrator on 2018/1/16/016.
 */

$(document).ready(function () {
    /*蔚蓝为你推荐*/
    var state = 0;
    $("#shopping_commend_arrow").click(function () {
        if (state == 0) {
            $("#shopping_commend_sort").hide("slow");
            $(this).attr("src", "images/shopping_arrow_down.gif");
            state = 1;
        } else {
            $("#shopping_commend_sort").show("slow");
            $(this).attr("src", "images/shopping_arrow_up.gif");
            state = 0;
        }
    })

    /*计算总价方法*/
    function total() {
        var $oneIntegral = $(".shopping_product_list_2").find("label");
        var $scPrice = $(".shopping_product_list_3").find("label");
        var $wlPrice = $(".shopping_product_list_4").find("label");
        var $number = $(".shopping_product_list_5").find("input");
        //初始化商品金额总计
        var sum = 0;
        //初始化市场金额总计
        var bazaar = 0;
        //初始化节省金额
        var save = 0;
        //初始化积分总计
        var Integral = 0;
        for (var i = 0; i < $(".shopping_product_list").length; i++) {
            sum += $wlPrice.eq(i).html() * $number.eq(i).val();
            bazaar += $scPrice.eq(i).html() * $number.eq(i).val();
            Integral += $oneIntegral.eq(i).html() * $number.eq(i).val();
        }
        save = bazaar - sum;
        $("#product_total").html(sum.toFixed(1));
        $("#product_save").html(save.toFixed(1));
        $("#product_integral").html(Integral);
    }
    total();

    /*删除商品功能*/
    $(".shopping_product_list_6 .blue").click(function () {
        var flag = confirm("您确定要删除商品吗?");
        if (flag == true){
            $(this).parent().parent().remove();
            total();
        }
    });

    /*清空购物车*/
    $("#removeAllProduct").click(function () {
        $("#myTableProduct").remove();
        $(".addDiv").show();
        total();
    })

    /*修改商品数量*/
    $(".shopping_product_list_5 input").bind("input propertychange",function () {
        if ($(this).val() == ""){
            $(this).val("0");
        } else if (isNaN($(this).val())){
            $(this).val("0");
        }
        total();
    })
});
