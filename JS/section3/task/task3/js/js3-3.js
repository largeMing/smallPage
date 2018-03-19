/**
 * Created by Administrator on 2017/12/4/004.
 */


function show(){
    myOl[1].style.display = "none";
    myOl[2].style.display = "none";
}
var myOl = document.getElementsByClassName("myol");
var myInput = document.getElementsByTagName("input");
function onButton1(){
    myInput[0].className = "newBtn";
    myInput[1].className = "btn";
    myInput[2].className = "btn";
    myOl[0].style.display = "block";
    myOl[1].style.display = "none";
    myOl[2].style.display = "none";
}

function onButton2(){
    myInput[0].className = "btn";
    myInput[1].className = "newBtn";
    myInput[2].className = "btn";
    myOl[0].style.display = "none";
    myOl[1].style.display = "block";
    myOl[2].style.display = "none";
}

function onButton3(){
    myInput[0].className = "btn";
    myInput[1].className = "btn";
    myInput[2].className = "newBtn";
    myOl[0].style.display = "none";
    myOl[1].style.display = "none";
    myOl[2].style.display = "block";
}

/*
function outButton(){
    myInput[0].className = "btn";
    myInput[1].className = "btn";
    myInput[2].className = "btn";
}*/
