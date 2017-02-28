/**
 * Created by wb.huanghuaqing on 2017/2/24.
 */
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: [
        './index.js',
        'webpack-hot-middleware/client'
    ],
    output: {
        path: path.join(__dirname, '__build__'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/__build__/'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015' },
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]

}
