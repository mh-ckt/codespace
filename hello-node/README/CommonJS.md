# 目录

- [module.exports 、exports 的区别？](##1)

## module.exports 、exports 的区别？

1. module.exports 和 exports 都是 CommonJS 的语法，是模块化开发中导出模块使用的。
2. CommonJS 规范规定，每个模块内部，module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口。加载某个模块，其实是加载该模块的 module.exports 属性。
3. exports 是 module.exports 的引用，通过 exports 导出的字段会自动添加到 module.exports 对象上。

```js
exports.a = 1
exports.b = function () {}
console.log(module.exports) //{ a: 1, b: [Function (anonymous)] }
```

4. 当重新为 module.exports 分配新的对象，exports 指向的还是之前 module.exports 对象。

```js
module.exports = {
  a: 1,
  b: 2
}
console.log(exports) //{}
```
