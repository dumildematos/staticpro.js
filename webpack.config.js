// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/staticpro.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, 'examples'),
    compress: true,
    port: 9000,
    watchContentBase: true,  // Add this line
  },
};
