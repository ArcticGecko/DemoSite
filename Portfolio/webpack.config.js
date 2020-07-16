const path = require('path');

module.exports = [{
    mode: "development",
    node: {
        global: true
    },
    entry: ["@babel/polyfill", "./tsOutput/Output.js"],
    output: {
        path: path.resolve(__dirname, "wwwroot/dist"),
        filename: "Portfolio.js",
        library: "Portfolio",
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /.(tsx|ts|json|js)/,
            exclude: [
                /node_modules/
            ],
            use: "babel-loader"
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    }
}, {
    mode: "development",
    entry: "./tsOutput/StyleOutput.js",
    output: {
        path: path.resolve(__dirname, "wwwroot/dist"),
        filename: "PortfolioCSS.js"
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            exclude: [
                /node_modules/
            ],
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Used to resolve urls in scss files
                'resolve-url-loader',
                // Compiles Sass to CSS
                'sass-loader'
            ]
        }]
    },
    resolve: {
        extensions: ['.scss']
    }
}];
