const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const ASSET_PATH = process.env.ASSET_PATH || './';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ASSET_PATH,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader'],
            }
        ]
    },
}