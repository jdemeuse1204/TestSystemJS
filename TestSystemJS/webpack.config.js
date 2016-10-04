var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'App'),
    entry: './main.js',
    output: {
        path: path.join(__dirname, 'App/js'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', 'min.js'],
        root: [
            path.resolve('.'),
            path.resolve('../Scripts/kendo/2016.2.714/') // the path to the minified scripts
        ]
    },
    provide: { $: '../Scripts/kendo/2016.2.714/jquery.min.js', jQuery: '../Scripts/kendo/2016.2.714/jquery.min.js' },
    plugins: [
        new WebpackNotifierPlugin()
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.eot$/, loader: "url" },
            { test: /\.html$/, loader: "html" }
        ]
    }
}