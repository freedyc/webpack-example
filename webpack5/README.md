### 单文件打包后的文件
对比webpack4,文件会把模块化机制的代码去掉， 代码更加简洁

1. 源码
```
const test = '测试🐶'

console.log(test);  
```
2. 开发环境（注意：一些注释已经被我删掉）
```
(() => {
    eval("const test = '测试🐶'\n\nconsole.log(test);  \n\n//# sourceURL=webpack://webpack5/./src/index.js?");
})();
```

3. 生产环境
会帮助你分析执行一些代码
```
console.log("测试🐶");
//# sourceMappingURL=main.js.map
```

### 清理没有应用的code 
1. 源码
```
const test = '测试🐶';
const test1 = '不用的数据';
function test2() {
    console.log("此函数也不会调用")
}
console.log(test);  
```
2. 开发环境
基本还是原样子打包出来
``` 
(() => {
eval("const test = '测试🐶';\nconst test1 = '不用的数据';\nfunction test2() {\n    console.log(\"此函数也不会调用\")\n}\nconsole.log(test);  \n\n//# sourceURL=webpack://webpack5/./src/index.js?");
})()
;
```
3. 生产环境
会清楚没有应用的函数和变量
```
console.log("测试🐶");
//# sourceMappingURL=main.js.map
```

### await 功能 TCP39规范 topLevelAwait
支持直接导出await数据, 配置webpack.config.js 就可以支持以下语法
```
{
    experiments: {
        topLevelAwait: true,
    }
}
```

```
const dynamic = async () => {
    const data = await new Promise((resolve, reject) =>{
        resolve("异步数据");
    })
    return data;
}
const output = await dynamic()
export default output + '🚗'
```