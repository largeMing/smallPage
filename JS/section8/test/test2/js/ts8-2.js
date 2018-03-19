/**
 * Created by Administrator on 2018/1/3/003.
 */

$(function () {
    var uName = ["时尚伊人", "六月奇迹", "松松", "白白", "帅帅"];
    var headImg = ["headImg1.webp", "headImg2.webp", "headImg3.webp", "headImg4.webp", "headImg5.webp"];
    $(".sub").click(function () {
        if ($(".input-cont").val() == "") {

        } else {
            var iNum = Math.floor(Math.random() * 5);
            var headStr = "<div><img src=img/" + headImg[iNum] + " class=chat-cont-img></div>";//头像
            var userName = "<p>" + uName[iNum] + "</p>";//昵称
            var chatStr = "<div class=img-cont-val>" + $(".input-cont").val() + "</div>";//获取并设置当前输入的内容
            var currentStr = "<div class=img-cont>" + headStr + "<div class=img-cont-r>" + userName + chatStr + "</div></div>";
            var str = $(".chat-cont").html();
            $(".chat-cont").html(str + currentStr);
            var myBox = document.getElementById("myBox");
            myBox.scrollTop = myBox.scrollHeight;
            $(".input-cont").val("");
        }
    });
    $(document).keydown(function (event) {
        if (event.keyCode == 13) {
            if ($(".input-cont").val() == "") {

            } else {
                var iNum = Math.floor(Math.random() * 5);
                var headStr = "<div><img src=img/" + headImg[iNum] + " class=chat-cont-img></div>";//头像
                var userName = "<p>" + uName[iNum] + "</p>";//昵称
                var chatStr = "<div class=img-cont-val>" + $(".input-cont").val() + "</div>";//获取并设置当前输入的内容
                var currentStr = "<div class=img-cont>" + headStr + "<div class=img-cont-r>" + userName + chatStr + "</div></div>";
                var str = $(".chat-cont").html();
                $(".chat-cont").html(str + currentStr);
                var myBox = document.getElementById("myBox");
                myBox.scrollTop = myBox.scrollHeight;
                $(".input-cont").val("");
            }
        }
    });
});

