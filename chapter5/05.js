/*
 * @Author: shuaifeng zhang
 * @Date: 2018-07-29 13:16:34
 * @Last Modified by: shuaifeng zhang
 * @Last Modified time: 2018-08-14 22:56:20
 */
function addRen(params) {
    return params + 10;
}
console.log(addRen(12));

let  addNum = addRen;
console.log(addNum(23));

// 函数声明和函数表达式；
// 为什么该函数会在函数声明之前调用？这是因为函数声明有一个函数生明提升的过程，
// 虽然是生命函数在后，但引擎在解析的时候，会把函数声明提升到最顶部，所以就会执行
console.warn(reduce1(21));
function reduce1 (params) {
    return params - 11;
}
// 函数表达式没有提升，只能是按顺序执行,没有提升的过程所以就会报错
console.log(reduce2(190));// reduce2 is  not a function
var reduce2 = function (params) {
    return params - 14;
};
console.log(reduce2(190)); //176 正常执行
