/*
 * @Author: shuaifeng zhang
 * @Date: 2018-07-28 10:09:20
 * @Last Modified by: shuaifeng zhang
 * @Last Modified time: 2018-09-01 22:22:24
 */

// 正则表达式
let reg = /[1-9]/g;
let str = '14522477';
console.log(reg.test(str));
// 匹配元字符，转译,
// 匹配ea,eb,ec...,ra,rb,rc,全局匹配
let reg1 = /[er][a-z]/g;
let str2 = 'erstrsrtsutkek';
console.log(reg1.test(str2));
// 匹配[er]er,只匹配一次，在这里对“]”和“[”进行转译；
let reg3 = /\[er\]we/;
console.log(reg3.test('ewe'));
console.log(reg3.test('[er]wee'));

// 匹配所有以’bo‘结尾的字符，匹配多次；
let reg4 = /.bo/g;
let str4 = 'abobobobob'; // 只会匹配两次

// 循环中的正则表达式
for (i = 0; i < 10; i++) {
    re = /cat/g;
    console.log(re.test('catastrophe'));
}

// 捕获组；
let reg10 = /da/g;
let str12 = 'mom and dad and baby';
console.log(reg10.exec(str12));
// [ 'da', index: 8, input: 'mom and dad and baby' ]

let text = 'cat, bat, sat, fat';
let pattern1 = /.at/g;

let maches = pattern1.exec(text);
console.log(maches[0]);// cat
console.log(maches.index);// 0 因为是第一次执行该方法，所以是0
console.log(maches.input);// 'cat, bat, sat, fat'   应用该正则表达式的字符串
console.log(maches.lastIndex);// 3 表示开始搜索下一个匹配项的起始位置，因为下一次搜索匹配项的开始位置是3
maches = pattern1.exec(text);
console.log(maches[0]);// bat
console.log(maches.index);// 5 因为是第二次执行该方法，所以是5
console.log(maches.input);// 'cat, bat, sat, fat'   应用该正则表达式的字符串
console.log(maches.lastIndex);// 8 表示开始搜索下一个匹配项的起始位置；同理
