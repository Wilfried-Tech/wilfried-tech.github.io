// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
const resolve = (...paths) => path.resolve(...paths).replace(/\\/g, "/")


const config = {
    entry: './src/index.js',
    output: {
        path: isProduction ? path.resolve(__dirname, "../js/") : path.resolve(__dirname, "dist"),
        filename: "wilfried-tech.min.js",
        clean: true,
    },
    devServer: {
        open: false,
        host: "0.0.0.0",
        port: 8080,
        static: {
            directory: path.resolve(__dirname, '..')
        },
        client: {
            progress: true
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/template.html"),
            minify: false,
            filename: isProduction ? path.resolve(__dirname, '../index.html') : 'index.html',
            scriptLoading: "blocking",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: resolve(__dirname, "node_modules/bootstrap/dist/js/bootstrap.bundle.min.{js,js.map}"),
                    context: resolve(__dirname, "node_modules/bootstrap/dist/js/"),
                    to: resolve(__dirname, "../js/vendor/"),
                },
                {
                    from: resolve(__dirname, "node_modules/bootstrap-icons/font/**/*.{woff,woff2,min.css,map}"),
                    context: resolve(__dirname, "node_modules/bootstrap-icons/font"),
                    to: resolve(__dirname, "../css/vendor/"),
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';

        config.plugins.push(new MiniCssExtractPlugin());


        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());

    } else {
        config.mode = 'development';
    }
    return config;
};
