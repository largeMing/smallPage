/**
 * Created by Administrator on 2018/1/11/011.
 */

$(document).ready(function () {
    //获取需要计算的tr
    var trNum = $(".product");

    /*全选功能*/
    //获取不包含全选按钮的复选框
    var $myCheck = $("input[name='cartCheckBox']");
    $("#allCheckBox").click(function () {
        //判断全选按钮是否选中
        if (($(this).is(':checked'))) {
            $myCheck.each(function () {
                $(this).prop('checked', true);
            });
        } else {
            $myCheck.each(function () {
                $(this).prop('checked', false);
            });
        }
    });
     /*判断所有的复选框都被选中*/
    //获取到复选框
    var myCheck = $(".product").find(".cart_td_1").children("input");
    myCheck.click(function () {
        if (myCheck.eq(0).is(':checked') && myCheck.eq(1).is(':checked') && myCheck.eq(2).is(':checked') && myCheck.eq(3).is(':checked')) {
            $("#allCheckBox").prop("checked", true);
        } else {
            $("#allCheckBox").prop("checked", false);
        }
    });

    /*计算总价和积分点方法*/
    function totalFun() {
        //商品总价
        var summer = 0;
        //总积分
        var integral = 0;
        var num = trNum.children(".cart_td_6").find("input");
        var price = trNum.children(".cart_td_5");
        var integral = trNum.children(".cart_td_4");
        var subtotalDom = trNum.children(".cart_td_7");
        var totalIntegral = 0;
        for (var i = 0; i < trNum.length; i++) {
            //显示商品小计
            subtotalDom.eq(i).html(num.eq(i).val() * price.eq(i).html());
            summer += num.eq(i).val() * price.eq(i).html();
            totalIntegral += num.eq(i).val() * integral.eq(i).html();
        }
        //显示商品总价
        $("#total").html(summer);
        //显示可获积分点
        $("#integral").html(totalIntegral);
    }

    totalFun();

    /*商品数量增加和减少功能*/
    var $userMinus = trNum.children(".cart_td_6").children("[alt=minus]");
    var $userAdd = trNum.children(".cart_td_6").children("[alt=add]");
    $userMinus.click(function () {
        var numVal = parseInt($(this).next().val());
        $(this).next().val(--numVal);
        if (numVal < 1) {
            $(this).next().val("1");
            numVal = 1;
            return;
        }
        totalFun();
    });
    $userAdd.click(function () {
        var numVal = parseInt($(this).prev().val());
        $(this).prev().val(++numVal);
        totalFun();
    });
   

    /*点击删除  删除对应的商品和卖家信息所在*/
    $(".cart_td_8").find("a").click(function () {
        //获取数量
        var myNum = $(this).parent().parent().find(".cart_td_6").children("input").val();
        //获取当前商品价格
        var money = $(this).parent().parent().find(".cart_td_7").html();
        //获取当前商品积分
        var userIntegral = $(this).parent().parent().find(".cart_td_4").html() * myNum;
        //获取总价
        var old = $("#total").html();
        //获取总积分
        var oldIntegral = $("#integral").html();
        //重新设置总价
        $("#total").html(old - money);
        //重新设置总积分
        $("#integral").html(oldIntegral - userIntegral);
        $(this).parent().parent().prev().remove();
        $(this).parent().parent().remove();
    });

    /*删除所选商品方法*/
    $("#deleteAll").click(function () {
        for (var i = 0; i < myCheck.length; i++) {
            if (myCheck.eq(i).is(':checked')) {
                myCheck.eq(i).parent().parent().prev().remove();
                myCheck.eq(i).parent().parent().remove();
            }
        }
    });


});

