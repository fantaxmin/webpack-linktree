import path from 'path';
import { dirname } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    entry : './src/index.ts',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'main.js',
        publicPath : './'
    },
    resolve : {
        extensions : ['.ts', '.js']
    },
    module : {
        rules : [
            {
                test : /\.ts$/,
                use : 'ts-loader',
                exclude : /node_modules/
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename : './index.html'
        }),
        new CopyWebpackPlugin({
            patterns : [
                {
                    from : 'public',
                    to : '.',
                    globOptions: {
                        ignore: ['**/index.html'] // Ignorar index.html al copiar
                    }
                }
            ]
        })
    ]
}