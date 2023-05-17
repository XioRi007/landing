const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {WebpackManifestPlugin} = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: ['./resources/js/app.js', './resources/css/app.scss'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
    assetModuleFilename: './img/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer:{
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './resources/index.html',
      options: {
        root: path.resolve(__dirname, 'public')
      }
    }),
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
      publicPath: '/public/'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'resources/img', to: 'img' }
      ]
    })
  ]
}
