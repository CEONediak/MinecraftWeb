const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    'index':'./src/index.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Minecraft',
      template: './index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from:__dirname+'/static',
        to:__dirname+'/dist'
      }
    ])
  ],
  output:{
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },{
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },{
        test: /\.(woff|woff2|eot|ttf|otf)&/,
        use: [
          'file-loader'
        ]
      },{
        test: /\.(csv|tsv)&/,
        use: [
          'csv-loader'
        ]
      },{
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};