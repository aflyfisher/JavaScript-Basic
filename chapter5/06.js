function getSum(params) {
    console.log(arguments);
    console.log(arguments.callee); // getSum函数本身
    return params + 10;
}
console.log(getSum(120));
// 递归阶乘
function Sum(params) {
    if (params > 1) {
        return params * arguments.callee(params - 1);
    }
    else {
        return 1;
    }
}

// 递归 求和；
function Sum2(params) {
    if (params > 0) {
        return  params+arguments.callee(params - 1);
    }else{
        return 0
    }
}

console.log(Sum2(12));
//  this的理解
function acer () {
    get();//很明显是acer函数调用了这个函数
}

function get() {
    console.log(get.caller);
}
acer();// acer 函数本身；
