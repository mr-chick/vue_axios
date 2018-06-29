const path = require('path');

module.exports = {
  entry: ["babel-polyfill", "./index.js"],
  output: {
        path: path.resolve('../dist'),
        filename: 'build.js',
        library: 'vue_axios',
        libraryTarget: 'commonjs2'
      },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }, 
};

// npx webpack