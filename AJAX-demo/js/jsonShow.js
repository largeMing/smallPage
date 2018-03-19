$(function () {
    $.ajax({
        type: "get",//请求类型
        url: "json/userJson",//请求地址
        data: null,//参数
        dataType: "JSON",//返回数据类型
        success: function (ret) {//请求成功
            console.log(ret);
            //生成列表
            var htmlContent = "";
            var selectContent = "";
            for (var index in ret) {
                var temp = ret[index];

                //表格内容开始
                htmlContent += "<tr>";

                //ID
                htmlContent += "<td>";
                htmlContent += temp.userid;
                htmlContent += "</td>";

                //name
                htmlContent += "<td>";
                htmlContent += temp.username;
                htmlContent += "</td>";

                //地址
                htmlContent += "<td>";
                htmlContent += temp.address;
                htmlContent += "</td>";

                //电话
                htmlContent += "<td>";
                htmlContent += temp.mobile;
                htmlContent += "</td>";

                htmlContent += "</tr>";
                //表格内容结束


                //下拉框内容
                selectContent += "<option value='"+(index+1)+"'>";
                selectContent += temp.username + " - " + temp.address + " - " + temp.mobile;
                selectContent += "</option>"
            }

            //添加内容
            $(".userTable").html("<tr><th>ID</th><th>姓名</th><th>住址</th><th>手机</th></tr>" + htmlContent);
            $("#userSelect").html(selectContent)
        },
        error: function () {//请求失败
            alert("请求失败!")
        }
    });
})