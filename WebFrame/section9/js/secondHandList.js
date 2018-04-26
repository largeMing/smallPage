$(function () {
    var $childMiddle = $(".child-middle li:not(:first-child)");
    var $child1 = $(".child-area-box");
    var $child2 = $(".child-price-list");
    var $child3 = $(".child-houseType-box");
    var $child4 = $(".child-more-box");
    $(".area-list li").tap(function () {
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
        if ($(this).index() === 0) {
            $child1.css("display", "flex");
            $child2.hide();
            $child3.hide();
            $child4.hide();
        } else if ($(this).index() === 1) {
            $child1.hide();
            $child2.show();
            $child3.hide();
            $child4.hide();
        } else if ($(this).index() === 2) {
            $child1.hide();
            $child2.hide();
            $child3.show();
            $child4.hide();
        } else {
            $child1.hide();
            $child2.hide();
            $child3.hide();
            $child4.show();
        }
        if ($(this).hasClass('active')) {
            $("#areaBox").addClass("area-box");
        } else {
            $("#areaBox").removeClass("area-box");
            $child1.hide();
            $child2.hide();
            $child3.hide();
            $child4.hide();
        }
    })

    $(".child-houseType-list input").tap(function () {
        if ($(this).is(':checked')) {
            $(this).addClass("checked-check");
            $(this).parent().addClass("active")
        } else {
            $(this).removeClass("checked-check");
            $(this).parent().removeClass("active")
        }
    });

    $(".c-m-area span").tap(function () {
        $(this).toggleClass("solid")
    });

    $(".empty-btn").tap(function () {
        $(".c-m-area span").each(function () {
            $(".c-m-area span").removeClass("solid")
        })
    });

    $(".child-left div").tap(function () {
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active")
    });

    $childMiddle.tap(function () {
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
        if ($(this).hasClass("active") == false) {
            $(".child-middle li:not(:first-child)").eq(0).addClass("active");
        }

        $.ajax({
            url: 'json/' + $(this).index(),
            type: 'GET',
            data: null,
            dataType: 'json',
            success: function (userData) {
                ajaxData(userData);
                $(".child-right li").tap(function () {
                    $(this).toggleClass("active");
                    $(this).siblings().removeClass("active");
                })
            }
        });
    });

    function ajaxData(data) {
        $(".child-right").html("");
        for (var i = 0; i < data.length; i++) {
            $(".child-right").append("<li>" + data[i].address + "</li>")
        }
    }

    $(".child-price-list li").tap(function () {
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active")
    })
});