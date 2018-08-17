/*
 * @Author: shuaifeng zhang
 * @Date: 2018-08-15 22:38:04
 * @Last Modified by: shuaifeng zhang
 * @Last Modified time: 2018-08-16 23:35:46
 */
// 基本包装类型;
// "其实在访问基本类型的时候,都会在背后创建一个对应的包装类型对象，从而让我们能过够通过一些方法操作数据（只存在于访问变量的顺瞬间，然后立即销毁）"
let A = 12;
console.log(A);
let str = 'hello,你好呀！';
console.log(str.substring(1,4));//ell

//
var value = "25";
var number = Number(value); //转型函数
console.log((typeof number)); //"number"
var obj = new Number(value); //构造函数
console.log(typeof obj);
// 数字的那些事儿；
console.log(0.94.toFixed(0));// 1
console.log((0.5).toFixed(0));// 1
console.log((0.49).toFixed(0));// 0
console.log(12);
// string类型常用的方法；
// str.charAt(index) 返回字符串在index下标下的字符串
let str1 = 'hello,world!';
console.log(str1.charAt(3));// l
console.log(str1[4]);// o
console.log(str1.slice(1,7));
console.log(str1.substring(1,7));


var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf("e");
while (pos > -1) {
    positions.push(pos);
    pos = stringValue.indexOf("e", pos + 1);
}
console.log(positions); // "3,24,32,35,52"

// 转换大小写；
// trim()方法去掉函str两端的空字符串；
let str2 = 'hah,nihaoya!      ';
console.log(str2.length);// 18
console.log(str2.trim().length);// 12

// search（regExp）
let str3 = 'I am Zhang shuaiFeng';
let reg = /.an/;
let regO = new RegExp('.an');
let regOb = new RegExp('.Ad');
console.log(str3.search(reg));// 6 匹配到了han;
console.log(str3.search(regO)); // 6
console.log(str3.search(regOb)); // -1
// 替换字符串 replace
let str4 = 'bat cat mat lat sat';
var reg4 = /.at/;
var reg5 = new RegExp('.at');
var reg6  = /at/g;
// 第一个参数是正则
console.log(str4.replace(reg4, 'ond')); // ond cat mat lat sat，只匹配到一次，‘bat’所以被替换成了‘ond’
console.log(str4.replace(reg5, 'ond'));// 同上；
// 第一个参数是字符串
console.log(str4.replace('at','ond')); // 同上，只匹配一次将第一个at，替换成了ond；
// 全局匹配；
console.log(str4.replace(reg6, 'ond'));// 同上；全局匹配，匹配了多次 bond cond mond lond sond；

// 字符串转化为数组分割；split（）；
let str5 = str4;
console.log(str5.split(' ')); // [ 'bat', 'cat', 'mat', 'lat', 'sat' ]
// 参数是正则表达式；
let reg7 = /[^\,]+/;
