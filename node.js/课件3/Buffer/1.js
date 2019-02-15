/**
 * 位 -> 字节
 * 
 * ascii
 */


// process.stdin.on('data', (data) => {
//     console.log(data);
// });

// let bf1 = new Buffer(4);    //长度
// console.log(bf1);
// bf1[0] = 96; //二进制值

// bf1[0] = '中';

// bf1[4] = 96;
// console.log(bf1);

// let bf2 = new Buffer('miaov');
// let bf3 = new Buffer('妙味');

// console.log( bf2 );
// console.log( bf3 );
// console.log( '妙味'.length, bf3.length );


// let bf4 = new Buffer(10);

// bf4.fill(0x60, 2, 4);

// console.log(bf4);


let bf5 = Buffer.from('miaov');
let bf6 = Buffer.from('miaov');

// console.log(bf5, bf6);
// console.log(bf5 == bf6); //比较地址

// [1,2,3] == [1,2,3]

// console.log( bf5.equals(bf6) );

console.log( '妙味'.length );
console.log( Buffer.byteLength('妙味') );

// 基础概念，并不能够直接用于实现某个具体的效果，但是，我们
// 后面的一些效果的使用会经常涉及到这些基本原理的东西
// 后端（围绕  -  数据操作）