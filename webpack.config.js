const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.ts',
    ouput : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'main.js'
    },
    resolve : {
        extensions : ['.ts', '.js']
    },
    module : {
        rules : [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename : './index.html'
        })
    ]
}