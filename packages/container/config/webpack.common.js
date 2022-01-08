const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },

      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ // this plugin for connect html file in public with all project js files
      template: './public/index.html',
    }),
  ]
};
