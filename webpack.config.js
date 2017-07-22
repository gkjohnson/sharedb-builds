const webpack = require('webpack')
const fs = require('fs')
const path = require('path')

// Create map for multiple file output to
// produce a "[filename].min.js" per file:
// {
//    [filename] : "./build/[filename].[ext]",
//    ...
// }

const entry = {}
const files = fs.readdirSync('./build').map(file => entry[file.replace(/.js$/, '')] = `./build/${file}`)

module.exports = {
    entry,
    
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].min.js'
    },
    
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }]
    },

    resolve: {
        modules: [path.join(__dirname, "node_modules")]
    },

    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true
      })
    ]
}