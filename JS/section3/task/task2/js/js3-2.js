/**
 * Created by Administrator on 2017/12/4/004.
 */


function uPush(){
    var lastLi = document.getElementsByClassName("box")[0].firstElementChild.lastElementChild;//获取到最后一个li
    var newNode = lastLi.cloneNode(true);//克隆最后一个Li
    document.getElementsByClassName("box")[0].firstElementChild.appendChild(newNode);//将克隆的li节点插入到ul的末尾
}