const path = require('path');

module.exports = {
  entry: './src/script/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/assets/script')
  },
  module: {
      loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
      ]
  }
};