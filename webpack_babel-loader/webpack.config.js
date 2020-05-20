//npm install -D babel-loader @babel/core @babel/preset-env webpack

//npm install -D @babel/plugin-transform-runtime 
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env',{
                targets: {
                  browsers: ['last 2 versions']
                }
              }
          ]
        ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
    
};