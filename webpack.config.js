const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./public/script.js', './public/styles.scss'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [ 
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                    ]
            },
            {
                test: /\.(s*)css$/,
                use: [ 
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },

        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
        open: true,
        historyApiFallback: true
    }

}