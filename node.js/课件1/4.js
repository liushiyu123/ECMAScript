// console.log(1);

// setTimeout(function() {
//     console.log('定时任务1');
// }, 2000);
// setTimeout(function() {
//     console.log('定时任务2');
// }, 100);
// setTimeout(function() {
//     console.log('定时任务3');
// }, 100);

// console.log(2);
// for (var i=0; i<100000; i++) {

// }


/**
 * 
    console.log('script start');
    console.log('script end');
    new Promise(resolve => {
        console.log('promise start');
        resolve();
    })

    .then(function() {
        console.log('promise1');
    }).then(function() {
        console.log('promise2');
    });
 * 
 * 
 * event loop
 * setTimeout(function() {
    console.log('setTimeout');
}, 0);


同步代码
    (宏，微)
event loop

 */

// console.log('script start');

// setTimeout(function() {
    
//     new Promise((resolve)=>{}).then()

//     setTimeout(function() {
    
//     }, 0);

// }, 0);

// new Promise(resolve => {
//     console.log('promise start');
//     setTimeout(() => {
//         console.log('setTimeout2');
//         resolve();
//     }, 1000)
// }).then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });

// console.log('script end');


setTimeout(() => {

    // 宏任务
    new Promise(resolve => {
        console.log('promise')
        resolve();
    }).then(() => {
        //微任务
        console.log('then')
    });

    // 宏任务
    console.log(1);
    // 宏任务
    setTimeout(() => {

        console.log(1)

    }, 1000);

}, 1000);