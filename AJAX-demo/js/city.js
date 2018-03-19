$(function () {
    $.ajax({
        url: "userData.html",
        type: "GET",
        data: null,
        dataType: "json",
        success: function (userData) {
            userAJAX(userData);
            //将选中的显示出来
            $(".city-show input").click(function () {
                $(".city-check-show").html("");
                $(".city-show input:checkbox:checked").each(function () {
                    $(".city-check-show").append("<li id=" + $(this).attr("id") + ">" + $(this).parent().text() + "<span>×</span></li>")
                });
            })
        },
        error: function () {
            alert("AJAX请求失败!")
        }
    })

    function userAJAX(cont) {
        $.each(cont, function (i) {
            $(".city-show").append("<li><input id=" + cont[i].tag_id + " type=\"checkbox\">" + cont[i].tag_name + "</li>")
        })
    }
    
    //全选
    $(".all").click(function () {
        $.each($(".city-show input"), function () {
            $(".city-show input").prop("checked", true)
        })
    })
    //取消
    $(".none").click(function () {
        $.each($(".city-show input"), function () {
            $(".city-show input").prop("checked", false)
        })
    })
    //反选
    $(".invert").click(function () {
        $.each($(".city-show input"), function () {
            $(this).prop("checked", !$(this).prop("checked"));
        })
    })


})