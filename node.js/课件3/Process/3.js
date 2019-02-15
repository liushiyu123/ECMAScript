var fs = require('fs');
// process.stdout.write('Hello');

// process.stdin.on('data', (e) => {
//     console.log('用户输入', e.toString());
// });

// fs.mkdirSync('app');

process.stdout.write('请输入你要创建的项目名称：');

process.stdin.on('data', (e) => {
    // console.log('项目名称：', e.toString());
    // console.log(e.toString());
    fs.mkdirSync( e.toString().replace('\r\n', '') );
    process.stdout.write('项目创建成功');
});