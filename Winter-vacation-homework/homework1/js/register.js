$(function () {
    $(".check-def").click(function () {
        if ($(this).is(":checked")){
            $(this).addClass("checked");
        } else {
            $(this).removeClass("checked");
        }
    })
})