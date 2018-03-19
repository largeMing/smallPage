/**
 * Created by Administrator on 2017/12/5/005.
 */


function change(num) {
	for (var i = 1; i <= 3; i++) {
		document.getElementById("d" + i).style.display = "none";
	}
	document.getElementById("d" + num).style.display = "block";
}