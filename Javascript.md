#Chapter4：变量作用域和内存问题
##4.1 基本类型的变量和引用类型的变量的区别；
基本类型的变量（number,boolean,string,null,undefined）,其变量包含的就是这些基本类型值本身，复制该型变量其实就是复制值的副本给另一个变量，两个变量之间毫无关系
而引用类型的变量（对象，Object,function等），变量名包含的是一个指针（引用），指向了对应的对象，在访问引用类型的变量时，实际上访问的是对象的引用。但是复制引用类型的变量其实复制的是该变量的引用（指针），两个变量将指向同一个对象,互相影响;
>基本类型值在内存中占据固定大小的空间，因此被保存在栈内存中,引用类型的值是对象，保存在堆内存中；
>
###4.1.1<font color = "red">函数中的参数为何是按值传递的？？</font>
请看下面的例子：
``` javascript
    function setName(obj) {
        obj.name = "Nicholas";
        obj = new Object();// obj指向了新的对象
        obj.name = "Greg";
    }
    var person = new Object();
    setName(person);
    alert(person.name); //"Nicholas"
    /*
        为什么是“nocholas”，而不是“greg”？？
        在执行完14行代码后，参数（实际上是参数person，和外部的变量person不一样）的指向发生了变化，属性name也变成了Greg，但是当访问person.name的时候依然是“Nicholas”,这说明参数person的指向发生了变化，并不影响外部person的指向，也就是说参数按值传递的(假设是按引用传递的，那么参数person和外部的person指向的的同一个对象，参数person的引用发生了变化，那么外部的person也会发生变化，但实际上并不是)

    */
```
##4.2作用域
###4.2.1.什么是作用域？
就是一套规则，一个根据名称来查找变量的规则。
###4.2.2.规则具体是什么？
引擎会首先在变量所在的作用域中查找（当前作用域），如果没找到，则继续往外层作用域中查找，以此以此类推...,直到找到该变量或者到最外层的作用域为止（全局作用域）
### 4.2.3词法作用域
####1.什么是词法作用域？
就是你在<font color = red>写代码的时候将变量和块作用域写在哪里决定的</font>(也就是说词法作用域只跟变量或作用域的定义的位置有关)，如:
``` javascript
    function foo(a) {
        var b = a + 5;
        function bar(c) {
            console.log(a,b,c);
        }
        bar(4)
    }
    foo(6);
    // 这里面有三个作用域，分别是：
    /**
     * 1.全局作用域，里面只有一个标识符foo,因为包含foo的直接作用域就是全局作用域
     * 2.函数foo所创建的作用域，包含a，b，bar，同理
     * 3.函数bar所创建的作用域，包含c，同理，虽然里面有a,b;但是这两个字符是都定义在了foo形成的作用域中，所以...
     */
```
>注意：`eval（“代码字符串”）`，会改变`eval`所在的环境的词法作用域，因为在写`eval（“代码字符串”）`的地方，会生成“代码字符串”，就好像其本身就存在那里一样.还有一种是`with`语法（不再赘述）,因为使用他们会导致性能的减弱（一般情况下，引擎在词法阶段会去确定好各个变量的位置，以及如何访问它们，`eval`和`with`的出现使的引擎确定不了这些，所以就干脆就不确定和优化），所及尽可能的不要使用他们！
####2、函数作用域
属于这个函数的全部变量都可以在整个函数范围内被访问到和复用（事实上在函数嵌套的作用域上也可以使用）。
``` javascript
    function getSum(params) {
        function as(num){
            return num*2+params
            // 在这里的params可不是属于as的变量,而是属于函数getSum的作用域中的变量（因为在那里定义的），只是在这里进行了访问而已
        }
        var s = as(params);
        console.log(s*2)
    }
    getSum(10);//60
    // 全局作用域中的变量：getSum；
    // getSum函数作用域中的变量：as，parames，s，
    //as函数作用域变量：num
```
>注意：
>1.在访问这样的变量--`a.b.c`的时候,过程是这样的，首先会找到a对象，然后再在a对象的基础上找b,然后找c...以此类推；
>2.<font color = red>在分析函数代码的时候首先要分析并务必弄清楚这个函数的作用域,以及在该作用域下有哪些变量？这些变量他们是如何传递的？</font>
><font color = blue>如何区分函数表达式还是函数声明？</font>就看function 关键字出现在声明中的位置（不仅仅是一行代码， 而是整个声明中的位置）。 如果 function 是声明中的第一个词， 那么就是一个函数声明， 否则就是一个函数表达式。,另外函数表达式是可以匿名的（也就是说匿名函数就是一个函数表达式），但是函数声明不行。
###4.2.4、自运行函数;
####1自运行函数的好处;
    自运行函数能够形成一个独立的作用域，而且不污染其所在的作用域
####2自运行函数的实践和最佳实践
``` javascript
    var name = "李四";
    (function alert1(name,global){
        console.log(name);//张三
        console.log(global.name)//李四
    })("张三",window)
    // 该函数表达式的名字alert1只能在函数体内访问到，这种模式也叫IIFE(立即执行函数表达式)
    // 第一个（）是将函数声明转化为函数表达式，第二个（）是表示立即执行，并且装实参的
```
如果自运行函数的参数是一个函数呢？
``` javascript
    var a = 2;
    (function IIFE(func) {
        func( window );
    })(function def( global ) {
        var a = 3;
        console.log( a ); // 3
        console.log( global.a ); // 2
    })
    // 这里将一个函数def，作为一个自运行函数的参数传递了进去，由于函数是一个对象，函数名其实是个指针，指向函数对象本身，那么在这里def就代表函数,在自运行函数内部调用了这个函数def
```
###4.2.5 块级作用域
简单的了解了一下，总结出了一点，<font color = "red">块级作用域内的变量无论如何是不能被外界访问的到的，</font>这样就避免了污染外部作用域，比如在if语句中用let声明一个变量，无论条件是真是假，都无法访问该变量；
``` javascript
    if(true){
        let a = 12;
        var b = 13;
    }
    console.log(b);//能访问的到,13
    console.log(a)//not defined
```
###4.2.6、声明提升
包括变量和函数在内的所有声明都会在任何代码被执行前首先被处理（被提升到了最前面）,<font color = "red">通常是函数声明提升到了最前面，其次是变量声明</font>。看一个例子：
``` javascript
    foo(); // "b"
    var a = true;
    if (a) {
    function foo() { console.log("a"); }
    }
    else {
    function foo() { console.log("b"); }

```
其实这里有一个函数声明和变量声明提升的过程,上面的代码执行过程是：
``` javascript
    if (a) {
        function foo() { console.log("a"); }
    }
    else {
        function foo() { console.log("b");
    }
    var a;
    //上面的代码执行完后，确定a是一个udefined，所以执行false语句；
    foo(); // 由于此时a是一个undefined，所以在判断语句中执行的额是else语句，所以结果是"b"
    a = true;
    foo();//"b"，此时早已经判断过了，foo的声明也已成定局，所以是"b";
```
###4.2.7 javaScript的垃圾收集机制
1. *标记清除*是目前主要的垃圾收集算法，其思想是给那些不再使用的值加上标记，然后再回收其内存；另一种是“引用计数”，这种算法的思想是跟踪记录所有值被引用的次数，对于引用次数为0的变量进行内存回收
<hr>
#Chapter5：引用类型

##5.1 obj类型
###5.1.1 对象的定义
对象是某种特定引用类型的实例，描述的是一类对象所具有的属性和方法
##5.1.2 创建对象的两种方式
+ 构造函数：`new Array()`,`new Object()`等；
+ 字面量的形式：`[]`,`{}`等
##5.1.3访问对象的属性（或方法）
+ 点"·"表示法(不再赘述)；
+ 方括号表示法
 就是将属性名的字符串形式放在方括号中来进行访问，例如`student["name"]`,
> 方括号表示法的好处之一是可以通过变量的形式访问对象的属性
##5.2 数组
###5.2.1创建数组的方式
1. 构造函数`new Array(param)`方法，参数param可有可无，如果param是一个数字，表示其创建素组的长度；如果是其他（比如是字符串和对象），那么就会创建一个`length`为1的数组,其对应项就是param
2. 字面量 `var arr = []`方法
###5.2.2 数组中的length
数组中的`length`属性不是只读的，你可以给数组设置`length`属性，来达到一定的目的，例如：
``` javascript
    let colorArr = ['red','yellow','green'];
    colorArr.length = 100;
    // 此时当访问colorArr的length的时候，值是100，只不过从第四项开始一直到最后一项都是undefined
```
###5.2.3 检测一个对象是否是数组
`Array.isArray(value)`,这里的value就是要检测的对象或数组，返回`true`或者`false`;
###5.2.4 数组中常用的一些方法
1. `push()和pop()`：其中`push()`方法接受任意数量的参数，以将其逐个添加到数组的末尾，并返回修改后数组的length（也就是说操作的结果是一个数字）;而`pop()`则是从数组的末尾移除最后一项，并返回移除的项；
``` javascript
    // push()
    let arr = [1,2,3];
    console.log(arr.push('4','7','22'));// 6；
    console.log(arr);// [ 1, 2, 3, '4', '7', '22' ]
    // pop()
    console.log(arr.pop());//‘22’
```
2. `unshift()和shift()`：这里`unshift()`方法和`push()`方法类似,也接受任意数量的参数，只不过会将参数逐个添加到数组的顶部，并返回修改后数组的长度；`shift()`方法和`pop()`方法类似，移除数组的第一项并返回之
3. `concat(param)`方法：首先会复制一份原数组的副本，参数`param`如果是一个（或多个）数组，结果会将数组中的每一项的依次拼接到原数组后面，并返回之；如果`param`不是数组，那么就会将`param`直接拼接到原数组后面并返回之
4. `slice()方法`：会基于当前数组中的一项或者多项，返回新创建的新的数组。接受一个或者两个参数，即返回项的起始和结束位置（如果是两个参数，返回的是不包括结束位置项）
``` javascript
    let person = ['hello','world','biadu','pingk'];
    console.log(person.slice(1,2));// world
    console.log(person.slice(1)); // [ 'world', 'biadu', 'pingk' ]
    console.log(person.slice());// 返回原数组
```
>如果参数中有负数，那么就加上原数组的length，再进行分析

5. `splice()方法`：功能非常强大
    + *删除*：传递两个参数，即要删除项的起始位置和要删除的项数；
    + *插入*：传递三个参数,即要删除项的起始位置，0，和要插入的项（如果有多项要插入，就接着传）；
    + *替换*：传递三个参数，即要删除项的起始位置，删除的项数和要插入的项（如果有多项，就接着传，其中删除项的起始位置也就是插入项的起始位置）；
    > 该方法返回的结果是由返回的项组成的数组，操作元素组；
``` javascript
        let personAee = ['Tom','Jerry','Herry','perter','Sans','Cary'];
        let los = personAee;
        console.log(personAee.splice(2, 3, 'John', 'Smith'));// 'Herry','perter','Sans'
        console.log(personAee);// 'Tom','Jerry','John','Smith','Cary'
        console.log(los);// 'Tom','Jerry','John','Smith','Cary',因为两个变量之乡的是同一个数组，当一个变化的时候两一个也会被影响到
        console.log(los.splice(1, 0, 'Herry', 'Jundle'));// 'Tom', 'Herry', 'Jundle', 'Jerry', 'John', 'Smith', 'Cary'
```
`indexOf()和lastIndexOf()方法：` 两个可以接受两个参数，要查找的项和查找起点位置的索引;两个唯一的区别是查找的方向不同：前者是由前往后查找，后者是由后向前查找，都返回查找项在数组中的位置，如果没有查找到就返回-1
`迭代方法：`非常多，包括`map()`,`every()`,`filter()`,`each()`等不再详细赘述
``;
###5.2.5 数组的重排序
`arr.reverse()`是反转数组，`arr.sort()`方法会对数组进行重排序,但问题是`sort()`方法排序实际上先将数组中的某一项调用`toString()`方法转化为字符串后再进行排序，这样肯定不行。
sort()方法一般要接受一个比较函数作为参数：
``` javascript
    var arr1 = [1, 4, 3, 6, 9, 2];
    function sortBy(pa1,pa2) {
        if (pa1>pa2){
            return 1;
        }else if(pa1<pa2){
            return -1;
        }else if (pa1 === pa2) {
            return 0;
        }
    }
    console.log(arr1.sort(sortBy));//一个拍过序的数组，从小到大
```
> reverse()和 sort()方法的返回值是经过排序之后的数组
##5.3 Date类型
