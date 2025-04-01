import path from 'path';
import { dirname } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    entry : './src/index.ts',
    output : {
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