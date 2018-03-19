var url = 'http://live.bilibili.com/bili/recom?callback=liveXhrDone';
$(document).ready(function () {
    $.ajax({
        type: "post",
        url: url,
        dataType: "JSONP",
        callback: "jss",
        success: function (ret) {
            console.log(ret);
            //取一部分数据
            var data = ret.data.preview;

            //循环Json集合
            for (var temp in data) {
                var jsonDate = data[temp];

                //创建行
                var tr = document.createElement("tr");
                //创建列
                var td1 = document.createElement("td");
                //创建图片
                var img = document.createElement("img");
                //修改图片路径
                $(img).attr("src", jsonDate.pic);
                //添加图片
                td1.appendChild(img);
                //新建列
                var td2 = document.createElement("td");
                //插入文字
                $(td2).html(jsonDate.title);

                //添加列
                tr.appendChild(td1);
                tr.appendChild(td2);
                //天剑到表
                $("#container").append(tr);
            }


        }
    });
});