const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv').config({
    path: path.join(__dirname, '.env'),
});

console.log('enviroment variables:', dotenv);
module.exports = {
    mode: `${dotenv.parsed.APP_ENV}`,
    entry: {
        main: ['./js/app.js', './scss/app.scss'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].min.js',
        library: 'foodstand',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /(node_modules|docker)/,
                use: [
                    // fallback to style-loader in development
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|docker)/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].min.css',
        }),
        new webpack.DefinePlugin({
            'process.env': dotenv.parsed,
        }),
    ],
    resolve: {
        alias: {
            '@utils': path.resolve(__dirname, 'source/js/utils/'),
            '@api': path.resolve(__dirname, 'source/js/api/'),
            '@components': path.resolve(__dirname, 'source/js/components/'),
            '@objects': path.resolve(__dirname, 'source/js/objects/'),
            '@modal': path.resolve(__dirname, 'source/js/modal/'),
            '@hooks': path.resolve(__dirname, 'source/js/hooks/'),
            '@store': path.resolve(__dirname, 'source/js/store/'),
        },
    },
};
