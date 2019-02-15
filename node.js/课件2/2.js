// 2.js 也是一个独立的模块文件

var a = 2;

console.log(a);

// global，把一个内部是有的数据挂载到全局对象下面
// 但是这种做法并不推荐，污染全局变量
// global.m2_a = a;

// 模块数据到的导出

/**
 * 如果我们想把一个模块中的私有数据导出到外部使用，那么我们可以把这个数据挂载
 * 到一个 exports 的对象下面
 */

 console.log(exports);
exports.a = a;