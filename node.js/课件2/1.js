/**
 * 1.js 其实就是一个独立的模块文件
 * 每一个模块（文件）都会有自己的独立作用域 - 模块作用域
 * require(模块id/模块的路径);
 * 
 * node.js实现这套模块系统方案（一个文件就是一个模块，有模块作用域、导入导出规则）
 *  - 规范：commonjs
 *  当然：完整的commonjs规范不止这一些，还包括了其他的一些规则，还要提供一个常用模块化，比如filesystem
 */

var a = 1;
console.log(a);

// 导入了2.js模块，该方法的返回值其实就是被导入模块的exports对象
var m2 = require('./2.js');

// 2.js中的a并没有影响到当前这个模块的a
console.log(a);
// console.log(global.m2_a);

console.log( m2.a );