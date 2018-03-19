<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<li>姓名：${requestScope.userInfo.name}</li>
<li>年龄：${requestScope.userInfo.age}</li>
<li>性别：${requestScope.userInfo.gender}</li>
<li>职业：${requestScope.userInfo.profession}</li>
<li>住址：${requestScope.userInfo.address}</li>
<li>电话：${requestScope.userInfo.mobile}</li>