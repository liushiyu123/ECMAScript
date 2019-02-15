/**
 * 每一个模块中都会有一个内置的对象：module
 *  该对象提供了包括当前模块文件所拥有的一些信息
 * 
 * {
 *  id: 当前模块的唯一标识，默认id为当前这个文件的绝对路径
 *  filename: 当前模块的文件
 * }
 */



let m2 = require('./a2.js'); //module.require();    得到的是 a2.js的module.exports

console.log(m2);

// console.log( module );