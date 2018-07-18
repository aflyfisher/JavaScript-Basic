let s = {
    name:'zhansgan'
};
let k = s;
k.age = 23;
console.log(s.age);
// 如果引用类型的变量s保存的是值，那么k保存的也是值，两者相互不影响
// 当为对象k添加属性age的时候，访问对象s的属性age，应该是undefined，但结果是23，这说明当改变k的时候影响了s，只能说明
// 访问s和k的时候，是同一个对象，所以，也就论证了笔记中的说法----引用类型变量保存的是地址（指针）
/* ---------------------------------------------------------------------------------------------- */
// 检测变量的值的类型
console.log( typeof null);// object
console.log(typeof {}); // object
/* -------------------------------------------作用域------------------------------------------------ */
function changeColor() {
    if (color === 'blue') {
        color = 'red';
    } else {
        color = 'blue';
    }
}
changeColor();
console.log('Color is now ' + color);// red撒打算
