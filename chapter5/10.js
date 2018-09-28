var str = 'http://www.wrox.com/illegal value.htm#start';
console.log(encodeURI(str));
str.substr()
var arr  = [1,32,3,4,56,8,10];
arr.join(',');
var N = 444;
eval("console.log(N)"); // 444,其实就相当于写在那里一样，本来就存在似的
eval('function sayHi(){console.log("Hi")}');
sayHi();

// 获取global对象
var global = function(){
    return this
}();
// console.log(global);
console.log(Math.ceil(-231.21));
