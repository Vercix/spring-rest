var path = require('path');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      path: __dirname,
      filename: '../resources/static/built/bundle.js'
   },
   module: {
      rules: [{
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
            loader: 'babel-loader'
         }
      },
      {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
      }
      ]
   },

};