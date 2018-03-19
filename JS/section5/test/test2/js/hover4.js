/**
 * Created by Administrator on 2017/12/21/021.
 */
$(document).ready(function(){
   $(".nav-t-r").mousemove(function () {
       $(this).css({"border":"solid 1px #000","border-bottom":"none","background":"#FFF"});
       $(this).children("ul").show();
   }).mouseout(function (){
       $(this).css({"border":"none","background":"#777"});
       $(this).children("ul").hide();
   })
});