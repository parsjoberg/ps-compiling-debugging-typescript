const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/, // tsx only necessary for react projects
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/bin'),
    sourceMapFilename: "bundle.js.map"
  },
  devtool: "eval-source-map",
  devServer: {
    static: [path.join(__dirname, 'public'), path.join(__dirname, 'dist/bin')],
    port: 7777,
  },
};