/**
 * Created by Administrator on 2017/12/22/022.
 */
/*鼠标移至图片上时,出现左右箭头,移出图片时,左右箭头消失*/
$(".box").mouseover(function () {
    $(".l-img").show();
    $(".r-img").show();
}).mouseout(function () {
    $(".l-img").hide();
    $(".r-img").hide();
});

