// exports是module.exports的引用，通过exports导出的字段会自动添加到module.exports对象上。
// exports.a = 1
// exports.b = function () {}
// console.log(module.exports) //{ a: 1, b: [Function (anonymous)] }

//当重新为module.exports分配新的对象，exports指向的还是之前module.exports对象。
// module.exports = {
//   a: 1,
//   b: 2
// }
// console.log(exports) //{}
