var ab = {};
ab.name = '驾校';
console.log(ab);

function alert1(obj) {
    var out = '';
    if (typeof obj.name ==="string") {
        out+="Name:"+obj.name+"\n";
    }
    if (typeof obj.age === "number") {
        out+="Age:"+obj.age;
    }
    console.log(out);
}
var objs = {
    name:"张三",
    age:12
}
alert1(objs);
// Name:张三,Age:12
var obj1 = {
    age:23
}
alert1(obj1)
// Age:23