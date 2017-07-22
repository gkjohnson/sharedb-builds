const webpack = require('webpack')
const fs = require('fs')
const path = require('path')

const entry = {}
const files = fs.readdirSync('./build').map(file => entry[file] = `./build/${file}`)

module.exports = {
    entry,
    
    output: {
        path: __dirname + '/dist',
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