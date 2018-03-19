/**
 * Created by Administrator on 2017/12/21/021.
 */
function show() {
    var myBody = document.getElementsByTagName("body")[0];
    var myP = document.createElement("p");
    myP.innerHTML = "我是新添加的p标签";
    myBody.appendChild(myP);
}