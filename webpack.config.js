// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'staticpro.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  watch: true, // Enable watch mode
};
