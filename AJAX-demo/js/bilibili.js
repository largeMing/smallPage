$(function () {
    var url = "http://localhost/proxy?url=https://www.bilibili.com/index/ding.json";
        $.ajax({
            url: url,
            type: "post",
            dataType: "jsonp",
            jsonp:"callback",
            jsonpCallback: "firstJsonp",
            success: function (cont) {
                console.log(cont);
                userData(cont);
            }
        })
    function userData(json) {
        $("#container").append("<th><td>aid</td><td>pic</td><td>tname</td><td>title</td><td>desc</td></th>")
        $.each(json.douga,function (i) {
            $("#container").append("<tr><td>"+json.douga[i].aid+"</td><td><img src="+json.douga[i].pic+" width='200px' height='200px'></td><td>"+json.douga[i].tname+"</td><td>"+json.douga[i].title+"</td><td>"+json.douga[i].desc+"</td></tr>")
        })
    }
})