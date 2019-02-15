// console.log( module );

/**
 * exports
 *  每一个模块文件中有一个 exports 对象
 *  在模块对象 module下有一个属性 exports
 * 
 * 虽然exports == module.exports是同一个东西，但是使用上是有一定注意事项的
 * 
 * 地址引用
 */

console.log( exports == module.exports );

// exports.a = 10; //module.exports.a = 10;


// 导出多个数据

// exports.a = 10;
// exports.b = 100;

// 有问题的
// exports = {
//     a: 10,
//     b: 100
// }

// 我们也可以
// module.exports.a = 10;
// module.exports.b = 100;

// 没问题的
// module.exports = {
//     a: 10,
//     b: 100
// }


// var module = {
//     exports: {}
// }

// var exports = module.exports;

// exports.a = 1;
// exports.b = 2;

// exports = {}    //把exports与module.exports的关系砍断了

// 对象

// var obj1 = {x: 1, y: 2};

// 地址应用
// var obj2 = obj1;

//在原来的地址上增加了一个z
//obj2.z = 10;

//把obj2指向了一个新的地址，和obj1没有任何关联的关系
// obj2 = {
//     z: 10
// }

// console.log(obj2);