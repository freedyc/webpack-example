
const path =require('path');
module.exports = {
    entry: path.join(__dirname, '/src/loader-include-exclude/index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                },
                // 组合1
                // exclude: /node_modules/,  // 如果设置则include 是不生效的
                // include: [
                //     path.resolve(__dirname + '/node_modules/lodash'), // 如果仅设置此项，则不会打包src文件夹下的js文件
                //     path.resolve(__dirname + '/src'), // 如果仅设置了此项，则不会打包node_modules下的文件
                // ]
                // 组合2,以下配置会导致 src，lodash，而node_module其他目录可以， 不使用此loader处理
                include: /node_modules/,
                exclude: [
                    path.resolve(__dirname + '/node_modules/lodash')
                ],
            }
        ]
    }
}


/**
 * Include 和 exclude 参数学习
 * exclude 优先级大雨 include
 * 在设置include 的时候一定要吧要打包的全部包含进去，否则会导致文件不执行loader
 *
 */
