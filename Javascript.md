#Chapter4：变量作用域和内存问题
##4.1 基本类型的变量和引用类型的变量的区别；
基本类型的变量（number,boolean,string,null,undefined）,其变量包含的就是这些基本类型值本身，复制该型变量其实就是复制值的副本给另一个变量，两个变量之间毫无关系
而引用类型的变量（对象，Object,function等），变量名包含的是一个指针（引用），指向了对应的对象，在访问引用类型的变量时，实际上访问的是对象的引用。但是复制引用类型的变量其实复制的是该变量的引用（指针），两个变量将指向同一个对象,互相影响;
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
        在执行完14行代码后，参数（实际上是参数person，和外部的变量person不一样）的指向发生了变化，属性name也变成了Greg，但是当访问person.name的时候依然是“Nicholas”,这说明参数的指向发生了变化，并不影响外部person的指向，也就是说参数按值传递的

    */
```
