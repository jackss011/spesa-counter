const webpack = require('webpack')
const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
    entry: APP_DIR + '/src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.sass$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['./node_modules', './app/src']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.template.html',
            filename: 'index.html',
            title: 'Spesa Counter',
            inject: 'body'
        })
    ],

    devServer: {
        contentBase: './dist'
    },

    devtool: 'source-map'
}
