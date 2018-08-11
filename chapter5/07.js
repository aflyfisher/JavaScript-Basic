let num1 = 12;
let num2 = 13;
function getSum(a,b) {
    var num1 = 100;
    var num2 = 23;
    return this.num1;
 }

function Sum(c,d) {
    return getSum.apply(this,[c,d]);
}
console.log(Sum(10, 20));
// console.log(Sum(10,20));
console.log(this);






window.color = 'red';
var o = {color:'blue'};

function sayColor() {
    console.log(this.color);
}
sayColor.call(o);





window.color = 'yellow',
    var obj = {
        color: 'pink'
    };

function sayColor1() {
    console.log(this.color)
}
var hhh =  sayColor1.bind(obj);//创建的一个新的函数实例
hhh();
// 此时hhh函数中的this就指向obj，所以是pink
