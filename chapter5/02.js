let colorArr = ['red','yellow','green'];
colorArr.length = 2;
console.log(colorArr[2]);// 访问的是第三项，由于数组的length是2，所以第三项是undefined
colorArr.length = 4;
console.log(colorArr[3]);
/* 检测对象是否是数组  Array.isArray() */
let str = '[1,2,3]';
console.log(Array.isArray(colorArr));// true
console.log(Array.isArray(str)); // false
// push()和pop（）
let arr = [1, 2, 3];
console.log(arr.push('4', '7', '22')); // 6
console.log(arr);
// pop();
console.log(arr.pop());// 5
// 数组排序
let arr1 = [1, 4, 3, 6, 9, 2];


/**
 * @description
 * @author shuaifeng zhang
 * @param {*} pa1
 * @param {*} pa2
 * @returns
 */
function sortBy(pa1,pa2) {
    if (pa1 > pa2){
        return 1;
    } else if (pa1 < pa2){
        return -1;
    } else if (pa1 === pa2) {
        return 0;
    }
}
console.log(arr1.sort(sortBy));
// concat()
let app = ['red','yellow','black'];
console.log(app.concat('green'));
console.log(Array.isArray(app.concat('green').concat('pink')));
// slice();
let person = ['hello','world','biadu','pingk'];
console.log(person.slice(1,2));// world
console.log(person.slice(1)); // [ 'world', 'biadu', 'pingk' ]
console.log(person.slice());// 返回原数组
// splice（）
let personAee = ['Tom','Jerry','Herry','perter','Sans','Cary'];
let los = personAee;
console.log(personAee.splice(2, 3, 'John', 'Smith'));// 'Herry','perter','Sans'
console.log(personAee);// 'Tom','Jerry','John','Smith','Cary'
console.log(los + '123'); // 'Tom','Jerry','John','Smith','Cary'
console.log(los.splice(1, 0, 'Herry', 'Jundle'));// 'Tom', 'Herry', 'Jundle', 'Jerry', 'John', 'Smith', 'Cary'
console.log(los);
