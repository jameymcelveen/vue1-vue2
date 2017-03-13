var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    library: "Vue1",
    // "var" | "assign" | "this" | "window" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "amd" | "umd" | "umd2" | "jsonp"
    libraryTarget: "window",
    filename: 'vue1.js',
    path: path.resolve(__dirname, 'dist')
  }
};