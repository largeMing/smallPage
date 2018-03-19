jQuery(document).ready(function($) {
	function initNews() {//使用Ajax技术获取新闻列表数据
		$.ajax({
			"url"		: "../util/news",
			"type"		: "GET",
			"data"		: "opr=list",
			"dataType"	: "json",
			"success"	: processNewsList
		});
	}
	function processNewsList(data) {//展示新闻列表
		var $newsList = $("#opt_area>ul");
		for (var i = 0; i < data.length;) {
			$newsList.append("<li>" + data[i].ntitle + "<span> 作者："
				+ data[i].nauthor + " &#160;&#160;&#160;&#160; "
				+ "<a href='#'>修改</a> &#160;&#160;&#160;&#160; "
				+ "<a href='#' onclick='return clickdel()'>删除</a>" 
				+ "</span></li>");
			if ((++i) % 5 == 0) {
				$newsList.append("<li class='space'></li>");
			}
		}
	}
	initNews();//执行新闻列表初始化工作
});