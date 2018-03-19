/**
 * Created by Administrator on 2017/12/13/013.
 */

function Flower() {

}

Flower.prototype.name = "曼陀罗花";
Flower.prototype.genera = "茄科 曼陀罗属";
Flower.prototype.area = "印度、中国北部";
Flower.prototype.uses = "观赏或药用";
Flower.prototype.showName = function(){
    alert(this.name + "\t" + this.genera);
}
var flower1 = new Flower();
flower1.showName();

var flower2 = new Flower();
flower2.showName();

alert(flower1.showName == flower2.showName);