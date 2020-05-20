//npm install --save-dev style-loader
//npm install --save-dev css-loader
//npm install sass-loader sass webpack --save-dev
//npm install --save-dev extract-text-webpack-plugin@next 提取css
//npm i -D postcss-loader
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader', 'postcss-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
  ]
};
