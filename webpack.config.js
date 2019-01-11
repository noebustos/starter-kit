var webpack = require('webpack');
var path = require ('path');

// In order for this file to work with npm, you need to install webpack version 3.11.0
//  $ npm install webpack@3.11.0
//Also if you want to run React make sure to install react dom $ npm install react react-dom

module.exports = {
  entry: {
    firstComp: './assets/js/firstComp/index.js',
    vendor: ['react']
  },
  output: { 
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/js/components')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', {modules: false}]
          ]
        }
      }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        //this assumes that your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ]
}