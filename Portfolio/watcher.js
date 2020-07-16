const fs = require('fs');
const process = require('process');
const path = require('path');
const webpack = require('webpack');

const parts = process.cwd().split(path.sep);
const project = parts[parts.length - 1];

let webpackConfig = require(path.join(process.cwd(), 'webpack.config.js'));
webpackConfig = typeof webpackConfig === 'function' ? webpackConfig() : webpackConfig;

let colouredString = (str, colour) => {
    // Wraps the text in foreground colour code followed by a colour reset code
    switch (colour) {
        case 'GREEN':
            return `\x1b[92m${str}\x1b[0m`;
        case 'RED':
            return `\x1b[31m${str}\x1b[0m`;
        case 'MAGENTA':
            return `\x1b[31m${str}\x1b[0m`;
        default:
            // Two reset codes
            return `\x1b[0m${str}\x1b[0m`;
    }
};

const compiler = webpack(webpackConfig);
compiler.watch({}, (err, stats) => {
    if (stats !== null) {
        console.log(stats.toString({ colors: true }));
    } else if (err !== null) {
        console.log(colouredString(err.toString(), 'RED'));
    } else {
        console.log(colouredString(`Something went wrong! Check watcher.js!`, 'MAGENTA'));
    }
})