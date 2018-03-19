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
		var $newsList = $("#opt_area>ul").empty();
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
	
	function initTopics() {//使用Ajax技术获取主题列表数据
		$.ajax({
			"url"		: "../util/topics",
			"type"		: "GET",
			"data"		: "opr=list",
			"dataType"	: "json",
			"success"	: processTopicsList
		});
	}
	function processTopicsList(data) {//展示主题列表
		var $topicsList = $("#opt_area>ul").empty();
		for (var i = 0; i < data.length; ++i) {
			$topicsList.append("<li> &#160;&#160;&#160;&#160; "
				+ data[i].tname + " &#160;&#160;&#160;&#160; "
				+ "<a href='../newspages/topic_modify.jsp?tid="
				+ data[i].tid + "&tname=" + data[i].tname + "'>修改</a>"
				+ " &#160;&#160;&#160;&#160; <a href='../util/topics?opr=del&tid="
				+ data[i].tid + "'>删除</a> </li>");
		}
	}
	var $leftLinks = $("#opt_list a"); // 获取页面左侧功能链接
	$leftLinks.eq(3).click(initTopics);
	$leftLinks.eq(1).click(initNews);
});