const path = require('path');
module.exports = {
    output: {
        // assetModuleFilename: 'images/[name][hash:5][ext]',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg)$/,
                type: 'asset',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    cache: {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, '.tem_cache')
    },
    optimization: {
        moduleIds: 'deterministic'
        // splitChunks:{
        //     cacheGroups: {
        //     },
        //     minSize: {
        //         javascript: 0,
        //         style: 0,
        //     },
        //     maxSize: {
        //         javascript: 1000,
        //         style: 300000,
        //     }
        // }
    },
    experiments: {
        topLevelAwait: true,
        asset: true,
    }
}