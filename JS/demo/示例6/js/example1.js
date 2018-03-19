/**
 * Created by Administrator on 2017/12/22/022.
 */
$(document).ready(function (){
    $("dt").click(function (){
        $("dd").show();
    })
});

/*基本选择器*/
/*$(function (){
    $("h1").css("color","blue");
    $(".price").css({"background":"#efefef","padding":"5px"});
    $("#author").css("color","#083499");
    $(".intro,dt,dd").css("color","#f00");
    $("*").css("font-weight","bold");
});*/

/*层次选择器*/
$(function () {
   // $(".text p").css("color","red");
   // $(".text > p").css("color","red");
   //  $("h1+p").css("text-decoration","underline");
    $("h1~p").css("text-decoration","underline");
});